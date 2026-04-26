/**
 * Posts registry — single source of truth.
 *
 * Discovers every `.md` file under `src/posts/` at build time using Vite's
 * `import.meta.glob`. Parses YAML frontmatter via `front-matter`, produces a
 * sorted array (newest first) and a bySlug lookup.
 *
 * Frontmatter shape (top of every .md file):
 *   ---
 *   title: A Tribute to Kentaro Miura
 *   date: 2021-07-27
 *   slug: kentaro-miura          # optional — auto-derived from filename if omitted
 *   draft: false                  # optional — default false; drafts hidden in prod
 *   cover: /images/kentaro.png    # optional — shown on article page
 *   summary: One-line preview     # optional — shown on the home list
 *   tags: [books, manga]          # optional — rendered as #chips on article page
 *   ---
 *
 * To add a new post: drop a file into `src/posts/`. That's it.
 */

import fm from 'front-matter';

export interface PostFrontmatter {
	title?: string;
	date?: string;
	slug?: string;
	draft?: boolean;
	cover?: string;
	summary?: string;
	tags?: string[];
}

export interface Post {
	slug: string;
	title: string;
	date: Date | null;
	dateDisplay: string;
	dateISO: string;
	draft: boolean;
	cover: string | null;
	summary: string;
	tags: string[];
	body: string;
	id: number;
	/** Legacy compatibility with older classic theme components */
	headLine: string;
	day: string;
}

// Vite's import.meta.glob with `query: '?raw'` returns the raw file contents;
// `eager: true` resolves synchronously at module load.
const FILES = import.meta.glob('../posts/*.md', {
	query: '?raw',
	import: 'default',
	eager: true,
}) as Record<string, string>;

function filenameToSlug(path: string): string {
	const base = path.split('/').pop()!.replace(/\.(md|markdown)$/, '');
	return base.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

function formatDate(d: Date | null): string {
	if (!d || isNaN(d.getTime())) return '';
	return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function loadAll(): Post[] {
	return Object.entries(FILES).map(([path, raw]) => {
		const parsed = fm<PostFrontmatter>(raw);
		const attrs = parsed.attributes || {};
		const slug = attrs.slug || filenameToSlug(path);
		const date = attrs.date ? new Date(attrs.date) : null;

		return {
			slug,
			title: attrs.title || slug,
			date,
			dateDisplay: date ? formatDate(date) : '',
			dateISO: date ? date.toISOString().slice(0, 10) : '',
			draft: !!attrs.draft,
			cover: attrs.cover || null,
			summary: attrs.summary || '',
			tags: Array.isArray(attrs.tags) ? attrs.tags : [],
			body: parsed.body,
			id: 0, // assigned below
			headLine: attrs.title || slug,
			day: date ? formatDate(date) : '',
		};
	});
}

const ALL: Post[] = loadAll()
	.filter((p) => import.meta.env.DEV || !p.draft)
	.sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0));

// Assign sequential display IDs (newest = highest).
ALL.forEach((p, i) => { p.id = ALL.length - i; });

const BY_SLUG: Record<string, Post> = Object.fromEntries(ALL.map((p) => [p.slug, p]));

export const posts: Post[] = ALL;
export const getPostBySlug = (slug: string): Post | null => BY_SLUG[slug] || null;

/** Estimate reading time in minutes from body length. ~220 wpm. */
export function readingTime(body: string): number {
	const words = body.trim().split(/\s+/).length;
	return Math.max(1, Math.round(words / 220));
}
