---
title: AGI is Coming — Cultivate Mental Models
date: 2026-04-26
tags: [agi, career, opinion]
summary: If Winter (AGI) Is Coming ⚔️❄️, why mental models, not skills, will save?
---

> *Today, **75% of all new code at Google** is now AI-generated and approved by engineers.*
>
> — **Sundar Pichai**, CEO of Alphabet/Google (April 2026)

**A note before I begin.** I do not personally believe **complete AGI is coming anytime soon**. I think the gap between *"impressive model"* and *"genuinely general intelligence"* is wider than the current narrative makes it sound, and most of the loudest predictions are, in my opinion, **priced for marketing rather than reality**.

This post is **not a prediction**. It is a thought exercise — *if* AGI does arrive, in whatever form and on whatever timeline, **this is how I think things will play out** for those of us working in tech, and this is what I think the only sane response looks like.

For most of my career, **I treated AGI the way most working engineers did** — as a *someday* problem. A sci-fi footnote. Something to argue about over coffee, not something to plan around.

I still think *complete* AGI is far. But I no longer think the **shape** of the disruption is far.

The AI tools already at my disposal have scaled up what *"productivity" to a company* means, and that is enough to take the rest of this argument seriously — even as a hypothetical.

**Andy Grove**, in *Only the Paranoid Survive*, gave me the vocabulary for what I am watching:

> *A strategic inflection point is a time in the life of a business when its fundamentals are about to change. That change can mean an opportunity to rise to new heights. But it may just as likely signal the beginning of the end.*
>
> — **Andrew S. Grove**, *Only the Paranoid Survive*

**AGI is a strategic inflection point** — not just for a business, but for an entire profession.

And the assumption that *"this will take decades"* is probably the **single most expensive belief** one can hold right now.

## It's all about the game, and how you play it.
### Why do I think AGI is actually coming?

I have never been persuaded by hype cycles or Twitter arguments. What changed my mind was watching **several independent curves** bend in the same direction at the same time.

- **Capability per dollar** is doubling faster than Moore's Law ever did. Models that cost millions to train two years ago **now run on a laptop**.
- **Context windows** have moved from 4K to multi-million tokens. That is not a feature upgrade — that is a **phase change** in what a model can reason over.
- **Agentic tool use** has stopped being a demo and started being a product. **ChatGPT processes 1+ billion queries daily, today**. The gap between *answering a question* and *doing the job* has collapsed.

  I remember this one personally — back in **2021, during my Salesforce internship**, I was building a **prototype of a live voice application** where a patient could interact with an AI over a **voice call**, and it felt like a **Sci-Fi Project**.

  Cut to today: **HDFC Bank has a voice agent. Swiggy has a voice agent.** What was a research prototype four years ago is now **increasing my credit card limit**.
- **Self-improvement pipelines** — models training, evaluating, and writing the code for the next generation of models — are now **standard infrastructure**, not research curiosities.

None of these, in isolation, prove anything. But they are **independent vectors pointing the same way**, and they are reinforcing each other.

When three or four exponentials braid together, the outcome is **not linear** — it is a cliff.

### But it still hallucinates, does it not?

It does. And five years ago it could not write a coherent paragraph.

The argument *"it cannot do X today"* has been **wrong about every X** on the list so far.

The more honest question is not whether the **current** generation can replace me — it is whether **the generation two years out** can do the **median task** in my job.

For most tasks in most tech roles, my honest answer is **yes**.

### So what does this mean for a working engineer?

The lazy reading is *"I will be obsolete".* 

A lot of what is your job today might be.

The more unsettling reading is this: **the thing that used to make me valuable — knowing how to do the task — is being commoditised in real time.**

Writing a CRUD endpoint, wiring up an auth flow, translating a spec into code, debugging a stack trace — these were the **atomic units of the job**. They are becoming the **atomic units of a prompt**. 

This essentially means **AI is already doing the job today**.

A pathetic joke I keep telling myself: *the only skill an engineer really needs now is writing a good `skills.md` for Claude.*

So the question I keep returning to is: **what is left?** What cannot be commoditised?

### What cannot be commoditised?

**Judgement.** Taste.

Knowing which of ten plausible solutions is **actually right** for this system, this team, this customer, this decade.

**Naval Ravikant** makes this point more sharply than I can:

> *Learn to sell, learn to build; if you can do both, you will be unstoppable. But more importantly, **specific knowledge, accountability, leverage, and judgement** — that is what pays.*
>
> — **Naval Ravikant**, *The Almanack of Naval Ravikant*

Of that list, the first three are already being amplified — and in some cases replaced — by AI tooling. **Judgement is the one that is not.**

And judgement, when I look at it carefully, is **downstream of exactly one thing** — mental models.

## It's all about control, and if you can take it.
### What is a mental model, exactly?

A mental model is a **compressed, reusable representation** of how some part of the world works.

If you are a KGPian, you already know this by another name — it is just a **"funda"**, the kind a wise old senior drops on you over chai at the hall canteen, the kind that stays with you long after you have forgotten the syllabus it came wrapped in.

**Shane Parrish** has spent the better part of a decade formalising this on *Farnam Street*, and his working definition is the cleanest I have come across:

> *A mental model is simply a representation of how something works. We cannot keep all of the details of the world in our brains, so we use models to **simplify the complex** into understandable and organisable chunks.*
>
> — **Shane Parrish**, *The Great Mental Models, Volume 1*

**A good mental model is a portable sword.** You carry it with you and consult it when the winter comes.

A few that live rent-free in my head, that I use all the:

- **Naval Ravikant — the harder path.** *"When you have two paths that seem equally good, pick the one with the most short-term pain."* The easy path is usually easy because someone has already extracted most of the value from it. The hard path compounds.
- **Chesterton's fence.** Before removing a rule, a process, or a piece of code, know **why it was put there**. Most "legacy" code is legacy because it survived something you didn't see.

They are **lenses**. One does not *use* them — one **thinks through them**.

The best way to **collect** mental models is to **read books**, and **wisdom**.

Here is the part I think most people miss. **LLMs are extraordinary at facts and syntax, and surprisingly poor at picking the right lens.** They will happily generate a technically correct answer to **the wrong question**. They will optimise the metric they were asked for and ignore the metric that **actually mattered**. They will solve the puzzle in front of them **without noticing it is the wrong puzzle**.

That gap — the gap between *a correct answer* and *the right answer* — is **where humans still live**. And it is made almost entirely of mental models.

Here is the part worth being honest about. **AI can do mechanical work blindingly fast** — it can write the boilerplate, stub the tests, refactor the module, translate the spec — and it can do all of this at a speed no human can match. What it **cannot do**, at least not yet, is **innovate**. It cannot look at a problem and decide *the problem itself is wrong*. It cannot take a leap that is not already implicit in its training data. That act — the act of originating — is **still a human job**.

**Steve Jobs** said it cleanly:

> *Innovation distinguishes between a leader and a follower.*
>
> — **Steve Jobs**

The machine is an extraordinary follower. The **leader** still has to be you.

And the **leading** — the seeing, the choosing, the originating — is done with **mental models**. This, I think, is the actual way out of the AI revolution. Not outrunning the machine on its own track, but **stacking lenses** until one can look at the same data and see a different problem.

**Charlie Munger** put it bluntly, and it has stayed with me:

> *You must know the big ideas in the big disciplines and use them routinely — all of them, not just a few. **The man with a hammer sees every problem as a nail.***
>
> — **Charlie Munger**

The way out is to **not to always choose the hammer**. Cultivate enough fundas that one can reach for the right tool, the right lens at the right time.

## It's all about the debt, and how you pay it.
### Honestly, AI-driven global warming might kill us first

The datacentres behind every frontier model **drink water and electricity** at a scale most people have not internalised. **Cooling** that pulls from municipal water supplies already running dry. **Ice caps melting** a little faster every quarter. **Sea levels** creeping up on coastlines that were already on borrowed time. **Bangalore** — once famous for its weather — now feels like **Kolkata in peak summer**, and AI is **not the only reason, but it is squarely one of them**. We are **burning a staggering slice of the planet** to get machines marginally closer to our own benchmarks.

This brings in the other point of no return, apart from AGI, we are missing over here is global warming. **AI-driven global warming might genuinely kill us before AGI ever arrives**. The climate curve is also an exponential. It is also reinforcing. And unlike the capability curves, it is **not one any of us can opt out of**. And countries need to cooperate with each other in other to make AGI or the progress towards it ethical.

## It's all about the pain, and who's gonna make it.
### What I have concluded

AGI is not the end of the career. It is the end of **the kind of career where knowing how to do, or what to do was enough**. The question **why something needs to be done** is seemingly more difficult for AI to answer, and is precisely where I feel, human interference shall remain crucial.

Is it all the most important today, to **ride with the AI wave**, to **understand the impact** it will generate on day-to-day life, and to use it as the tool it was meant to be, to **start depending on it for time-consuming labor**. 

While it might still be time before complete AGI arrives, only those will survive AGI, who are able to ride the wave, and not swim away from the tide.

Now since AGI **is the Game** — a game none of us are really in control of — I will leave you with a verse that has been echoing in my head the whole time I was writing this:

> *It's time to play the game.*
>
> *Time to play the game.*
>
> ***It's all about the game, and how you play it.***
>
> ***It's all about control, and if you can take it.***
>
> ***It's all about the debt, and how you pay it.***
>
> ***It's all about the pain, and who's gonna make it.***
>
> — **Motörhead**, *"The Game"* (Triple H's entrance theme)

<div class="video-container">
  <iframe allowfullscreen src="https://embed.music.apple.com/us/album/the-game-triple-h/585439692?i=585439812"></iframe>
</div>

---
