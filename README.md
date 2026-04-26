# ABJ-BLOGS

My tech & life blog. Hosted at https://abhj.github.io/abj-blogs.

Posts are authored in Markdown with YAML frontmatter — drop a file into `src/posts/` and it appears on the site automatically.

---

## Tech stack

<p>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="React Router" src="https://img.shields.io/badge/React_Router-6.26-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img alt="Markdown" src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
  <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub_Pages-222?style=for-the-badge&logo=github&logoColor=white">
</p>

### Build & runtime
- **[Vite 5](https://vitejs.dev/)** — dev server and production bundler (Rollup under the hood). Boots in ~200 ms, HMR in milliseconds.
- **[React 18](https://react.dev/)** — UI library with concurrent rendering and `createRoot` API.
- **[TypeScript 5](https://www.typescriptlang.org/)** — strict-mode type checking across every `.ts` / `.tsx` file. `tsc --noEmit` runs pre-build.
- **[React Router v6](https://reactrouter.com/)** — declarative client-side routing (`<Routes>`, `<Navigate>`, `useParams`, `useLocation`).

### Content pipeline
- **[`front-matter`](https://github.com/jxson/front-matter)** — YAML frontmatter parser, browser-safe (no Node `Buffer` dependency).
- **[`import.meta.glob`](https://vitejs.dev/guide/features.html#glob-import)** — Vite-native file discovery; posts registry loads every `.md` file at build time, zero runtime cost.
- **[`react-markdown`](https://github.com/remarkjs/react-markdown)** — Markdown → React components.
  - **[`remark-gfm`](https://github.com/remarkjs/remark-gfm)** plugin for GitHub-flavored features (tables, task lists, strikethrough).
  - **[`rehype-raw`](https://github.com/rehypejs/rehype-raw)** plugin so raw HTML (`<iframe>`, `<center>`, `<img>`) inside Markdown renders correctly.

### Deployment
- **[`gh-pages`](https://github.com/tschaub/gh-pages)** — one-command publish to the `gh-pages` branch.
- **[GitHub Pages](https://pages.github.com/)** — static hosting (free, custom-domain capable).
- **SPA redirect shim** (`public/404.html`) — enables deep-link reloads on any article slug.

### Styling
- **Hand-written CSS** (no Tailwind, no CSS-in-JS). Each theme is a single self-contained stylesheet.
- **CSS custom properties** for theme tokens (one palette for dark, another for light, flipped via `[data-theme]`).
- **`:has()`** for contextual styling (e.g. `pre:has(code)` differentiates real code blocks from caption `<pre>`s).
- **`color-mix(in srgb, …)`** for one-source accent tinting.
- **Inline SVG backgrounds** for paper/wood grain texture (no image files).
- **Fonts** (Google Fonts): **Inter** (body) + **Instrument Serif** (display) for modern; system Tahoma + monospace for classic.

### Quality gates
- `npm run build` runs `tsc --noEmit` before Vite builds — a TypeScript error fails the build.
- Vite's dev server is aliased to `/abj-blogs/` so local dev matches the GitHub Pages path exactly.

---

## Themes

Two themes ship side-by-side:

| Path | Theme | Style |
|---|---|---|
| `/` | **Modern** (default) | Parchment/walnut aesthetic, Instrument Serif display, Inter body, light + dark toggle |
| `/classic` | **Classic** | Original One-Dark-Vim-inspired look, monospace article body, preserved verbatim |

There's a link to the classic version in the modern footer, and a link back to modern at the bottom of every classic page. Both links are route-aware — if you're reading an article on one theme, the cross-link takes you to the same article on the other theme.

---

## Authoring a new post

**Drop one Markdown file into `src/posts/`. That's it.** Both themes pick it up automatically — no code edits, no route registration.

Filename convention: `YYYY-MM-DD-short-slug.md`. The leading date prefix is stripped from the URL; the rest becomes the slug.

```
src/posts/2026-04-25-my-new-post.md   →   /abj-blogs/my-new-post                (modern)
                                          /abj-blogs/classic/p/my-new-post      (classic)
```

### Writing a new post with Claude

When you want to publish something, tell Claude:

> "Use the template at `src/posts/_template.md.example` and fill it in with this content: [paste your raw draft]. Save it as `src/posts/YYYY-MM-DD-<slug>.md`. Do NOT change the text — only apply semantic formatting (bold key phrases, italicise titles, break long paragraphs, convert inline lists to bullets, wrap code identifiers in backticks). Follow the formatting rules in the template's header comment."

Claude will:
1. Read the template to see every supported embed/pattern **and the formatting rules** in its header block.
2. Produce a properly-structured post file with correct frontmatter.
3. **Apply visual formatting** (bold/italic/lists) without changing any of your original text.

**Formatting rules in one line**: no text changes, ever. Bold key phrases sparingly, italicise titles, break long paragraphs at natural points, convert comma-runs into bullet lists. That's it.

### Writing without Claude (manual)

The template at `src/posts/_template.md.example` is a live cheat sheet for every supported feature. When you forget how to embed a YouTube video, add a task list, or use a blockquote — crack it open and copy-paste the snippet you need.

It's safe to keep in `src/posts/` forever — the `.md.example` extension hides it from the posts registry (which globs `*.md` only), so it's never published.

### Frontmatter fields

```yaml
---
title: My New Post                   # required
date: 2026-05-01                     # required; ISO or any parseable date
slug: my-new-post                    # optional — auto-derived from filename
tags: [engineering, salesforce]      # optional — chips under the title
summary: One-line preview.           # optional — shown on home list
draft: false                         # optional — true = hidden in prod
cover: /images/cover.jpg             # optional — future use
---
```

Posts are **sorted by `date` automatically**, newest first. Drafts are only visible in `npm run dev` — stripped from the production build.

### Images

**Fastest: hotlink via URL**

```markdown
![alt text](https://picsum.photos/800/400)
```

**Nicer: local images (recommended for important assets)**

Drop the file into `public/images/`:

```
public/images/my-photo.jpg
```

Then reference it with the `/abj-blogs/` prefix:

```markdown
<img src="/abj-blogs/images/my-photo.jpg" alt="..." />
```

**Why the prefix?** The `public/` folder is copied verbatim into `dist/` at build time, and the `/abj-blogs/` prefix matches the Vite `base` config (since the site is deployed under that path on GitHub Pages).

### YouTube embeds (and any iframe)

Wrap the iframe in `<div class="video-container">`:

```html
<div class="video-container">
  <iframe allowfullscreen src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
</div>
```

The modern theme automatically gives any `video-container` iframe:
- 16:9 aspect ratio
- Rounded corners
- Engraved shadow (feels pressed into the page surface)

Works for Vimeo, CodePen, Spotify, anything iframe-based.

---

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000/abj-blogs/ — this is the modern theme. Visit `/abj-blogs/classic` for the classic theme.

## Deploy

```bash
npm run deploy
```

Runs `tsc --noEmit` (type check) + `vite build` + `gh-pages -d dist`. Live site updates within a minute.

---

## Architecture

```
src/
├── posts/                      ← the source of truth (Markdown + frontmatter)
│   └── _template.md.example    ← cheat-sheet for every supported feature
├── lib/
│   └── posts.ts                ← discovers posts via import.meta.glob, parses frontmatter
├── themes/
│   ├── modern/                 ← default theme
│   │   ├── ModernApp.tsx
│   │   ├── modern.css
│   │   ├── components/         Navbar, SiteFooter, PostCard, Lightbox, ScrollFab
│   │   └── pages/              Home, Article
│   └── classic/                ← preserved legacy theme
│       ├── ClassicApp.tsx
│       ├── index-original.css
│       ├── components/
│       └── pages/
├── App.tsx                     ← top-level theme router (/classic vs /)
└── index.tsx                   ← entry point
```

## Credits

- Colors from [One Dark for Vim](https://github.com/joshdick/onedark.vim) (classic theme palette)
- Modern theme's parchment/walnut aesthetic is hand-crafted
- Icons are inline SVG (no external icon library)
