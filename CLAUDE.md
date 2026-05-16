# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal site for Sriram Veeraghanta (vsriram.me). Static Astro site, dark-only theme, deployed to Cloudflare Pages.

## Commands

Package manager is **pnpm** (`packageManager` field in `package.json` pins the exact version).

- `pnpm dev` — Astro dev server at <http://localhost:4321>
- `pnpm build` — production build to `dist/`
- `pnpm preview` — serve the production build locally
- `pnpm check` — `astro check` (TypeScript + Zod schema validation for content collections)
- `pnpm format` — **oxfmt** rewrites JS/TS/JSON/CSS in place. **Note:** oxfmt does not yet support `.astro` files; rely on your editor (e.g., VSCode Astro extension) for those.
- `pnpm lint` — **oxlint** (Rust-based, no plugin ecosystem — built-in rules only)

There is no test suite. Verification is build-time: `pnpm check` (types, schemas) + `pnpm build` (full static render) + manual browser verification via `pnpm dev`.

## Architecture

- **Astro 5** with `output: 'static'`. Pages are server-rendered at build time into pure HTML/CSS/JS.
- **Content collections** in `src/content/` — three collections (`writing`, `work`, `playlists`) defined via Astro 5's **Content Layer API** with `glob` loaders. Schemas in `src/content/config.ts` use Zod. Malformed frontmatter is a build error. **Content Layer entries use `.id`, not `.slug`** — when wiring URLs, use `post.id`.
- **Rendering MDX/Markdown bodies**: import `render` from `astro:content` (the standalone function, not `entry.render()`). Pattern: `const { Content } = await render(entry);`
- **Pages call `src/lib/collections.ts` helpers** (`getWritingPosts`, `getWorkEntries`, `getPlaylists`) — never `getCollection()` directly — so sort/filter logic stays in one place. Draft posts are filtered out in production via `import.meta.env.PROD`.
- **`src/lib/site.ts`** is the single source of truth for site name, URL, socials, nav items, and default OG metadata. `BaseLayout` reads from it.
- **Path alias** `~/*` → `src/*` (configured in `tsconfig.json`).
- **Styling**: Tailwind with a custom dark-only theme defined in `tailwind.config.mjs`. Design tokens (colors, fonts, max-widths) live there — when changing visual styles, edit the theme, don't sprinkle hex codes through components.
- **Typography**: Tailwind Typography (`prose-invert`) for MDX post bodies. Long-form content goes through `<Prose>`.
- **Fonts**: self-hosted via `@fontsource-variable/*` packages imported in `src/styles/globals.css`. No external font requests.
- **Code highlighting**: Shiki via Astro's MDX config (`github-dark-dimmed` theme).

## Visual rules (matters for design changes)

- Site is **dark-only**, no light-mode toggle. `color-scheme: dark` is set on `<html>`.
- **Accent color `#ff5722`** is used sparingly: logo dot, `<Eyebrow>` labels, active nav underline, italic accent word in `<h1>`s, link hover, one CTA per page max. Never for body links, large-area borders, or backgrounds.
- Body type is serif (Source Serif 4). UI/meta/nav use Inter. Code uses JetBrains Mono.
- Max reading width is `max-w-content` (720px).

## Content authoring

- New blog post: `src/content/writing/<slug>.mdx` with required frontmatter `title`, `description`, `publishedAt`. Set `draft: true` to hide from production.
- New work entry: `src/content/work/<slug>.md` with `company`, `role`, `startDate` (YYYY-MM), `endDate` (YYYY-MM or null for current), `order` (lower = more recent).
- New playlist: `src/content/playlists/<slug>.md` with `title`, `spotifyId` (just the ID, not the URL), `addedAt`.

## Deployment

Cloudflare Pages, automatic deploys from the default branch. GitHub Action (`.github/workflows/ci.yml`) runs `pnpm check` + `pnpm build` on every push and PR — this is the merge gate.

## Spec & plan history

The rebuild spec lives at `docs/superpowers/specs/2026-05-16-astro-rebuild-design.md`. The implementation plan that produced this codebase lives at `docs/superpowers/plans/2026-05-16-astro-rebuild.md`. Useful when reasoning about why something is structured the way it is.
