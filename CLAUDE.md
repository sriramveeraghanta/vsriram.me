# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal website for Sriram Veeraghanta (vsriram.me). Next.js 15 + React 19 RC + Tailwind, deployed on Vercel.

## Commands

Package manager is pnpm (see `pnpm-lock.yaml`), but `package.json` scripts reference `yarn` in `test-all`. Use pnpm for installs; the individual scripts work with any runner.

- `pnpm dev` — start dev server at http://localhost:3000
- `pnpm build` — production build (`next build`)
- `pnpm start` — run the built app
- `pnpm type-check` — `tsc --pretty --noEmit`
- `pnpm lint` — ESLint over `.ts`, `.tsx`, `.js`
- `pnpm format` — Prettier write across `.js`/`.ts`/`.tsx`
- `pnpm test` — Jest (note: no test files or Jest config currently exist in the repo)
- `pnpm test-all` — runs lint + type-check + test (the script literally invokes `yarn`; replace with pnpm or run the three commands manually)

## Architecture

- **Next.js App Router** (`app/` directory). Each route is a folder with `page.tsx`; routes currently in use: `/` (home), `/playlists`, plus `work/` and `blog/` directories (the latter two are not linked in the navbar — see `app/navbar.tsx` where they're commented out).
- `app/layout.tsx` is the root layout: sets all metadata/OpenGraph/Twitter tags, applies dark-mode classes on `<html>`, and renders the shared `Navbar`.
- `app/page.tsx` is a server component (`revalidate = 60`) that reads display copy from `lib/constants.ts` (`FULL_NAME`, `ABOUT`, `BIO`) and renders social icons from `components/icons`.
- **Path aliases**: `tsconfig.json` sets `baseUrl: "."`, so imports use bare top-level dirs — `components/icons`, `lib/constants`, `styles/global.css`, `hooks/...`. No `@/` prefix.
- **Data fetching primitive**: `hooks/useRequest.ts` wraps SWR + Axios into a typed hook. Currently unused by any page but kept as the standard fetcher pattern when client-side data is added.
- **Styling**: Tailwind only; global CSS is `styles/global.css`. Tailwind `content` globs cover `app/`, `pages/`, and `components/` (no `pages/` actually exists — App Router only).

## Notes for edits

- `tsconfig.json` has `"strict": false` and targets `es5` — don't assume strict-mode behavior.
- React/React-DOM are pinned to a Next 15 RC build (`19.0.0-rc-…`). If adding deps, check React 19 RC compatibility.
- `README.md` is stale (references `pages/index.js` from the old Pages Router); ignore its instructions about where to edit.
