# vsriram.me — Astro rebuild design

**Date:** 2026-05-16
**Status:** approved (design phase)

## Goal

Rebuild the personal site `vsriram.me` from scratch on Astro with a dark-mode, editorial-meets-magazine aesthetic and an orange accent. The current Next.js 15 implementation is replaced in-place; git history is preserved.

## Scope

In scope:

- Static site with four sections: Home, Work, Writing, Playlists
- MDX-based writing collection with RSS feed
- Self-hosted fonts, dark-only theme
- Deployment to Cloudflare Pages on `vsriram.me`

Out of scope:

- Light-mode toggle (can be added later)
- Search, tag-filtering UI, comments, contact form
- Analytics (decide separately after launch)
- Newsletter signup
- Real LinkedIn import — Work entries ship as placeholder timeline; user populates content
- Migration of existing copy — all copy is rewritten fresh; `lib/constants.ts` is discarded

## Architecture

| Concern        | Choice                                                                |
| -------------- | --------------------------------------------------------------------- |
| Framework      | Astro (latest), `output: 'static'`                                    |
| Styling        | Tailwind CSS via `@astrojs/tailwind`, dark-only                       |
| Content        | Astro Content Collections with Zod schemas                            |
| Writing format | MDX via `@astrojs/mdx`, code highlighting via Shiki                   |
| Fonts          | Self-hosted: Source Serif 4 (body), Inter (UI), JetBrains Mono (code) |
| Icons          | `lucide-astro`                                                        |
| Package mgr    | pnpm                                                                  |
| Node           | 20 (pinned via `.nvmrc`)                                              |
| Hosting        | Cloudflare Pages, custom domain `vsriram.me`                          |
| CI             | GitHub Action: install → astro check → build; Lighthouse CI on PRs    |

## Pages & routes

```
/                       Home — bio, hero, socials, "Latest Writing" (last 3)
/work                   Career timeline (placeholder entries)
/writing                Index of posts, grouped by year, reverse chrono
/writing/[slug]         MDX post rendered in PostLayout
/playlists              Spotify embeds grid
/rss.xml                RSS feed for /writing (auto-generated)
/404                    Custom 404 in the same visual system
```

- The home page **is** the about page; no separate `/about`.
- Drafts are excluded from production builds (`draft: true` in frontmatter).

## Content collections

Defined in `src/content/config.ts` with Zod schemas. Each collection has a typed query helper in `src/lib/collections.ts` that pages call instead of using `getCollection()` directly.

### `writing` (MDX)

```yaml
title: string # required
description: string # required — used in index, RSS, OG tags
publishedAt: date # required
updatedAt: date # optional
draft: boolean # default false
tags: string[] # optional
```

Sort: `publishedAt` desc. Drafts filtered out in prod via `import.meta.env.PROD`.

### `work` (Markdown)

```yaml
company: string # required
role: string # required
startDate: string # required, format "YYYY-MM"
endDate: string | null # null = current
location: string # optional
url: string # optional (company link)
order: number # required — explicit ordering, lower = more recent
```

Sort: by `order` asc. Body is Markdown describing responsibilities.

### `playlists` (Markdown)

```yaml
title: string # required
spotifyId: string # required — Spotify playlist ID, not full URL
description: string # optional
addedAt: date # required
```

Sort: `addedAt` desc. Body unused (optional commentary).

## Component & file layout

```
src/
  layouts/
    BaseLayout.astro          <html>, <head>, meta, fonts, Navbar, Footer, slot
    PostLayout.astro          extends BaseLayout; prose container, post header, back link
  components/
    Navbar.astro              top nav with active-route underline (orange)
    Footer.astro              minimal: socials, © year, "built with Astro"
    SocialLinks.astro         GitHub / Twitter / LinkedIn (lucide-astro icons)
    Eyebrow.astro             uppercase orange label
    PostCard.astro            <a> row used in /writing index + Home "Latest Writing"
    TimelineEntry.astro       /work row: role, company, dates, body slot
    PlaylistEmbed.astro       Spotify iframe wrapper with title + description, lazy-loaded
    Prose.astro               wrapper applying @tailwindcss/typography "prose-invert"
  pages/                      Routes from "Pages & routes"
  content/
    config.ts                 Zod schemas
    writing/*.mdx
    work/*.md
    playlists/*.md
  styles/
    globals.css               reset, @font-face, Tailwind directives, CSS vars
  lib/
    site.ts                   site config (name, url, description, socials, default OG)
    collections.ts            typed query helpers
  assets/
    fonts/                    self-hosted .woff2
    images/profile.jpg        moved from public/
```

### Component contracts

- **`BaseLayout`** — props: `title`, `description`, `ogImage?`. Renders all `<head>` tags including OG/Twitter cards from `site.ts` defaults overridable per-page.
- **`PostLayout`** — wraps `BaseLayout`, adds post header (title, publish date, reading time) and "← Back to Writing" link. Slot receives MDX content wrapped in `Prose`.
- **`PostCard`** — props: `slug`, `title`, `date`, `description?`. Renders a single row with hover state (title turns orange).
- **`TimelineEntry`** — props: `company`, `role`, `startDate`, `endDate`, `location?`, `url?`. Default slot is the body description.
- **`PlaylistEmbed`** — props: `title`, `spotifyId`, `description?`. Renders the Spotify embed iframe with `loading="lazy"` and a plain text fallback link.
- **`Eyebrow`** — slot for the label text; applies the uppercase + accent treatment.

Each component does one thing. Layouts don't know about post-specific styling; cards don't know about layout.

## Visual system

### Color tokens (Tailwind theme + CSS vars)

| Token         | Value     | Use                     |
| ------------- | --------- | ----------------------- |
| `bg`          | `#0e0e0e` | Page background         |
| `bg-soft`     | `#111111` | Subtle surface, footer  |
| `border`      | `#2a2a2a` | Hairlines, card edges   |
| `border-soft` | `#1f1f1f` | Inner separators        |
| `text`        | `#e8e6e3` | Body, headings          |
| `text-2`      | `#c9c6c2` | Lede                    |
| `text-3`      | `#a8a6a3` | Secondary body          |
| `muted`       | `#888888` | Meta, inactive nav      |
| `muted-2`     | `#666666` | Dates, footnotes        |
| `accent`      | `#ff5722` | Orange — used sparingly |

### Typography

- **Source Serif 4** — body, headlines
- **Inter** — nav, eyebrow, meta, dates
- **JetBrains Mono** — inline `code`, MDX code blocks
- Scale: h1 38px / h2 28px / h3 20px / body 17px / meta 12px / eyebrow 11px

### Accent-color discipline

`accent` may appear on:

- Logo punctuation dot
- `<Eyebrow>` labels
- Italic accent word inside h1 (the "scale." treatment)
- Active nav underline
- Link hover state
- One CTA per page maximum, if any

It must **not** appear on body links, large-area borders, or backgrounds.

### Spacing & layout

- Max content width: `720px`
- Page horizontal padding: `28px` mobile, `56px` desktop
- Top padding: `48px`
- Section gaps: `36px` between blocks, `56px` between major sections

### Motion

- Hover transitions: `150ms` on color/border only
- No scroll-driven animations, no parallax

### Code blocks

- Shiki theme: `github-dark-dimmed`
- Inline `code`: `bg: #1a1a1a` pill, mono font, no background on inline `code` inside headings

## Error handling

- **Content schema violations** — Zod schemas turn malformed frontmatter into hard build failures.
- **Broken internal links** — `astro check` catches them at build time; CI runs it.
- **Missing images** — Astro's `<Image>` fails the build if a referenced asset is missing.
- **404** — custom `/404.astro` matches the rest of the visual system, single "back to home" link.
- **Spotify embed** — `<iframe loading="lazy">` with a small muted "Open in Spotify ↗" text link rendered alongside every embed (always visible, not just on failure — iframes can't render child fallbacks reliably). Keeps the page usable if Spotify blocks embeds or the user has third-party iframes disabled.

## Build & deployment

### Scripts (`package.json`)

| Script         | Command              |
| -------------- | -------------------- |
| `pnpm dev`     | `astro dev`          |
| `pnpm build`   | `astro build`        |
| `pnpm preview` | `astro preview`      |
| `pnpm check`   | `astro check`        |
| `pnpm format`  | `prettier --write .` |
| `pnpm lint`    | `eslint .`           |

### Cloudflare Pages

- Build command: `pnpm build`
- Output: `dist`
- Node: 20 (env var)
- Preview deploys on every PR; production deploys on push to default branch
- Custom domain `vsriram.me` via Cloudflare DNS
- No env vars or secrets required

### GitHub Action

Single workflow on push and PR:

1. Set up Node 20 + pnpm
2. `pnpm install --frozen-lockfile`
3. `pnpm check`
4. `pnpm build`
5. Lighthouse CI (on PRs only) — guards perf/a11y/SEO

## Rebuild strategy

In-place clean slate:

1. New Astro project is generated in a scratch directory.
2. Old Next.js files (`app/`, `components/`, `hooks/`, `lib/constants.ts`, `next.config.js`, `next-env.d.ts`, `pages/` if any, `.next/`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, `package.json` deps) are deleted from the repo.
3. Astro project files are moved in.
4. `public/images/profile.jpg` is preserved (moved to `src/assets/images/`).
5. `README.md` is replaced with one that matches the new stack.
6. `CLAUDE.md` is rewritten to reflect the Astro stack.
7. Git history is preserved — no force-pushes, no orphan branches.

## Open questions / decisions deferred to implementation

- Exact Source Serif 4 weights to self-host (likely 400, 500, 700; italic 400).
- Whether to ship a `humans.txt` or `security.txt` (low effort, can add).
- Final Lighthouse score thresholds (start with sensible defaults; tighten after first deploy).

## Success criteria

- All four sections build and render without runtime errors
- Lighthouse: performance ≥ 95, accessibility ≥ 95, SEO ≥ 95 on the home page
- RSS feed validates
- `astro check` passes on `main`
- Cloudflare Pages production deploy succeeds on push to default branch
- Visual output conforms to the tokens, typography, spacing, and accent-color rules defined in the **Visual system** section, at both desktop and mobile breakpoints
