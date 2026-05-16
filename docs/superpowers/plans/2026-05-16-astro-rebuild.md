# Astro Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing Next.js implementation of `vsriram.me` with a from-scratch Astro static site matching the design in `docs/superpowers/specs/2026-05-16-astro-rebuild-design.md`.

**Architecture:** Astro `output: 'static'` with Tailwind, MDX, and Content Collections (Zod schemas). Dark-only editorial-meets-magazine theme with an orange accent. Deployed to Cloudflare Pages. Self-hosted fonts via Fontsource. No client-side JS beyond what Astro injects for islands (none required for v1).

**Tech Stack:** Astro (latest), Tailwind CSS, `@astrojs/mdx`, `@astrojs/tailwind`, `@astrojs/rss`, `@astrojs/sitemap`, `lucide-astro`, `@fontsource-variable/source-serif-4`, `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono`, Zod, pnpm, Node 20, Cloudflare Pages.

**Verification model:** The spec explicitly excludes unit tests. Each task verifies via (a) `pnpm check` for TypeScript + collection schemas, (b) `pnpm build` succeeding, and (c) manual browser verification at the local dev URL where the task changed rendered output.

**Branch:** All work happens on a feature branch (`feat/astro-rebuild`) cut from the current default branch. The branch is merged in one shot at the end so the deployed site never enters a half-rebuilt state.

---

## File structure overview

After all tasks complete, the repo looks like:

```
vsriram.me/
├── .editorconfig
├── .eslintrc.cjs
├── .github/workflows/ci.yml
├── .gitignore
├── .nvmrc
├── .prettierrc
├── astro.config.mjs
├── CLAUDE.md                  (rewritten in final task)
├── docs/superpowers/{specs,plans}/...
├── package.json
├── pnpm-lock.yaml
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── README.md                  (rewritten in final task)
├── src/
│   ├── assets/
│   │   └── images/profile.jpg (moved from public/images/)
│   ├── components/
│   │   ├── Eyebrow.astro
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   ├── PlaylistEmbed.astro
│   │   ├── PostCard.astro
│   │   ├── Prose.astro
│   │   ├── SocialLinks.astro
│   │   └── TimelineEntry.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── playlists/
│   │   │   └── late-night-coding.md
│   │   ├── work/
│   │   │   ├── plane.md
│   │   │   └── placeholder-prior-role.md
│   │   └── writing/
│   │       └── hello-world.mdx
│   ├── env.d.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── lib/
│   │   ├── collections.ts
│   │   └── site.ts
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── index.astro
│   │   ├── playlists.astro
│   │   ├── rss.xml.ts
│   │   ├── work.astro
│   │   └── writing/
│   │       ├── [slug].astro
│   │       └── index.astro
│   └── styles/
│       └── globals.css
├── tailwind.config.mjs
└── tsconfig.json
```

Each file has one clear responsibility. Components don't know about layouts; layouts don't know about page-specific styling; the `lib/` layer keeps page templates thin.

---

### Task 1: Branch and wipe the old Next.js implementation

**Files:**
- Delete: `app/`, `components/`, `hooks/`, `lib/`, `styles/`, `pages/` (if any), `.next/`, `next.config.js`, `next-env.d.ts`, `postcss.config.js`, `tailwind.config.js`, `tsconfig.json`, `.eslintrc.json`, `package.json`, `pnpm-lock.yaml`
- Keep: `.git/`, `public/`, `README.md` (rewritten later), `CLAUDE.md` (rewritten later), `docs/`, `.gitignore` (edited later)

- [ ] **Step 1: Create and switch to the feature branch**

```bash
git checkout -b feat/astro-rebuild
```

Expected: `Switched to a new branch 'feat/astro-rebuild'`

- [ ] **Step 2: Delete old Next.js files**

```bash
rm -rf app components hooks lib styles .next next.config.js next-env.d.ts postcss.config.js tailwind.config.js tsconfig.json .eslintrc.json package.json pnpm-lock.yaml
```

If any of those paths don't exist, the `rm` will warn — that's fine, ignore.

- [ ] **Step 3: Verify the wipe**

```bash
ls -A | sort
```

Expected output should contain `.git`, `.gitignore`, `CLAUDE.md`, `README.md`, `docs`, `public`, and `.superpowers` (if visual companion was used). Should NOT contain `app`, `components`, `hooks`, `lib`, `styles`, `next.config.js`, `package.json`, or any other Next.js artifacts.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove Next.js implementation before Astro rebuild"
```

---

### Task 2: Initialize Astro project in place

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/env.d.ts`
- Modify: `.gitignore` (add Astro entries)

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "vsriram.me",
  "version": "0.2.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "format": "prettier --write .",
    "lint": "eslint ."
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/mdx": "^3.1.9",
    "@astrojs/rss": "^4.0.9",
    "@astrojs/sitemap": "^3.2.1",
    "@astrojs/tailwind": "^5.1.3",
    "@fontsource-variable/inter": "^5.1.0",
    "@fontsource-variable/jetbrains-mono": "^5.1.1",
    "@fontsource-variable/source-serif-4": "^5.1.0",
    "@tailwindcss/typography": "^0.5.15",
    "astro": "^5.0.5",
    "lucide-astro": "^1.0.0",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "eslint": "^9.17.0",
    "eslint-plugin-astro": "^1.3.1",
    "prettier": "^3.4.2",
    "prettier-plugin-astro": "^0.14.1",
    "prettier-plugin-tailwindcss": "^0.6.9"
  },
  "packageManager": "pnpm@9.15.0",
  "engines": {
    "node": ">=20"
  }
}
```

- [ ] **Step 2: Install dependencies**

```bash
pnpm install
```

Expected: `pnpm-lock.yaml` is created. No errors.

- [ ] **Step 3: Create `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vsriram.me',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: false,
    },
  },
});
```

- [ ] **Step 4: Create `tsconfig.json`**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  },
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

- [ ] **Step 5: Create `src/env.d.ts`**

```ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
```

- [ ] **Step 6: Replace `.gitignore` contents**

```gitignore
# Astro
.astro/
dist/

# Dependencies
node_modules/

# Logs
npm-debug.log*
pnpm-debug.log*

# OS
.DS_Store

# Editors
.vscode/
.idea/

# Env
.env
.env.local
.env.*.local

# Superpowers brainstorming artifacts
.superpowers/
```

- [ ] **Step 7: Verify the scaffold builds**

```bash
mkdir -p src/pages && echo '---' > src/pages/index.astro && echo '---' >> src/pages/index.astro && echo '<h1>placeholder</h1>' >> src/pages/index.astro
pnpm check
pnpm build
```

Expected: `astro check` reports 0 errors; `astro build` produces a `dist/` directory with `index.html`.

- [ ] **Step 8: Clean up the placeholder and commit**

```bash
rm src/pages/index.astro
rmdir src/pages
git add -A
git commit -m "chore: scaffold Astro project with Tailwind + MDX integrations"
```

---

### Task 3: Editor, format, and lint configuration

**Files:**
- Create: `.nvmrc`, `.editorconfig`, `.prettierrc`, `.eslintrc.cjs`, `.prettierignore`

- [ ] **Step 1: Create `.nvmrc`**

```
20
```

- [ ] **Step 2: Create `.editorconfig`**

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

- [ ] **Step 3: Create `.prettierrc`**

```json
{
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  "overrides": [
    {
      "files": "*.astro",
      "options": { "parser": "astro" }
    }
  ],
  "printWidth": 100,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all"
}
```

- [ ] **Step 4: Create `.prettierignore`**

```
.astro/
dist/
node_modules/
pnpm-lock.yaml
public/
.superpowers/
```

- [ ] **Step 5: Create `.eslintrc.cjs`**

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [],
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  ignorePatterns: ['dist/', '.astro/', 'node_modules/', '.superpowers/'],
};
```

- [ ] **Step 6: Verify**

```bash
pnpm format
pnpm lint
```

Expected: Prettier runs without errors; ESLint reports zero issues (there's no code yet).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: add editor, format, and lint config"
```

---

### Task 4: Visual tokens — Tailwind config and global CSS

**Files:**
- Create: `tailwind.config.mjs`, `src/styles/globals.css`

- [ ] **Step 1: Create `tailwind.config.mjs`**

```js
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0e0e0e',
        'bg-soft': '#111111',
        border: '#2a2a2a',
        'border-soft': '#1f1f1f',
        text: '#e8e6e3',
        'text-2': '#c9c6c2',
        'text-3': '#a8a6a3',
        muted: '#888888',
        'muted-2': '#666666',
        accent: '#ff5722',
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '720px',
      },
      typography: () => ({
        invert: {
          css: {
            '--tw-prose-body': '#c9c6c2',
            '--tw-prose-headings': '#e8e6e3',
            '--tw-prose-lead': '#c9c6c2',
            '--tw-prose-links': '#ff5722',
            '--tw-prose-bold': '#e8e6e3',
            '--tw-prose-counters': '#888888',
            '--tw-prose-bullets': '#2a2a2a',
            '--tw-prose-hr': '#2a2a2a',
            '--tw-prose-quotes': '#c9c6c2',
            '--tw-prose-quote-borders': '#ff5722',
            '--tw-prose-captions': '#888888',
            '--tw-prose-code': '#e8e6e3',
            '--tw-prose-pre-code': '#e8e6e3',
            '--tw-prose-pre-bg': '#0a0a0a',
            '--tw-prose-th-borders': '#2a2a2a',
            '--tw-prose-td-borders': '#1f1f1f',
          },
        },
      }),
    },
  },
  plugins: [typography],
};
```

- [ ] **Step 2: Create `src/styles/globals.css`**

```css
@import '@fontsource-variable/source-serif-4';
@import '@fontsource-variable/source-serif-4/italic.css';
@import '@fontsource-variable/inter';
@import '@fontsource-variable/jetbrains-mono';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    background-color: theme('colors.bg');
    color: theme('colors.text');
    color-scheme: dark;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    @apply font-serif;
    font-feature-settings: 'kern', 'liga';
  }

  /* Inline code pill */
  :not(pre) > code {
    @apply rounded bg-[#1a1a1a] px-[0.35em] py-[0.1em] font-mono text-[0.92em] text-text;
  }

  /* Selection */
  ::selection {
    background-color: theme('colors.accent');
    color: theme('colors.bg');
  }
}
```

- [ ] **Step 3: Verify Tailwind compiles**

Create a temporary page to confirm classes resolve.

```bash
mkdir -p src/pages
cat > src/pages/index.astro <<'EOF'
---
import '~/styles/globals.css';
---
<html lang="en">
  <head><meta charset="utf-8" /><title>tokens check</title></head>
  <body class="bg-bg text-text font-serif p-8">
    <h1 class="text-3xl text-text">Serif heading</h1>
    <p class="text-text-2">Body color text-2.</p>
    <p class="text-accent font-sans">Accent in sans.</p>
    <code>inline code</code>
  </body>
</html>
EOF
pnpm build
```

Expected: build succeeds; `dist/index.html` exists; opening it (or `pnpm dev` and visiting `http://localhost:4321`) shows dark background, serif heading, orange "Accent in sans" text, and a pill-styled inline code.

- [ ] **Step 4: Remove the temporary index, commit**

```bash
rm src/pages/index.astro
rmdir src/pages
git add -A
git commit -m "feat: set up Tailwind theme, design tokens, and global styles"
```

---

### Task 5: Site config (`lib/site.ts`)

**Files:**
- Create: `src/lib/site.ts`

- [ ] **Step 1: Create `src/lib/site.ts`**

```ts
export const site = {
  name: 'Sriram Veeraghanta',
  shortName: 'Sriram Veeraghanta',
  url: 'https://vsriram.me',
  description:
    'Software Architect and Engineering Manager. Building systems that scale and the teams that ship them.',
  locale: 'en-US',
  location: 'Hyderabad, India',
  defaultOgImage: '/og-default.jpg',
  socials: {
    github: 'https://github.com/sriramveeraghanta',
    twitter: 'https://twitter.com/issriramv',
    linkedin: 'https://www.linkedin.com/in/sriramveeraghanta/',
  },
  nav: [
    { label: 'About', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Writing', href: '/writing' },
    { label: 'Playlists', href: '/playlists' },
  ],
} as const;

export type SiteConfig = typeof site;
```

- [ ] **Step 2: Verify type-checks**

```bash
pnpm check
```

Expected: 0 errors. (No usage yet, but the file is type-valid.)

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add central site config (lib/site.ts)"
```

---

### Task 6: Content collection schemas (`content/config.ts`)

**Files:**
- Create: `src/content/config.ts`

- [ ] **Step 1: Create `src/content/config.ts`**

```ts
import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string().regex(/^\d{4}-\d{2}$/, 'Expected YYYY-MM'),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}$/, 'Expected YYYY-MM or null')
      .nullable()
      .default(null),
    location: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number().int(),
  }),
});

const playlists = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    spotifyId: z.string().min(10),
    description: z.string().optional(),
    addedAt: z.coerce.date(),
  }),
});

export const collections = { writing, work, playlists };
```

- [ ] **Step 2: Verify schemas load**

```bash
pnpm check
```

Expected: 0 errors. Astro generates `.astro/content.d.ts`; no warnings about missing collections (collections are allowed to be empty).

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: define Zod schemas for writing/work/playlists collections"
```

---

### Task 7: Typed collection query helpers (`lib/collections.ts`)

**Files:**
- Create: `src/lib/collections.ts`

- [ ] **Step 1: Create `src/lib/collections.ts`**

```ts
import { getCollection, type CollectionEntry } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;
export type WorkEntry = CollectionEntry<'work'>;
export type PlaylistEntry = CollectionEntry<'playlists'>;

export async function getWritingPosts(): Promise<WritingEntry[]> {
  const all = await getCollection('writing', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return all.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export async function getLatestWritingPosts(limit = 3): Promise<WritingEntry[]> {
  const posts = await getWritingPosts();
  return posts.slice(0, limit);
}

export async function getWorkEntries(): Promise<WorkEntry[]> {
  const all = await getCollection('work');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getPlaylists(): Promise<PlaylistEntry[]> {
  const all = await getCollection('playlists');
  return all.sort(
    (a, b) => b.data.addedAt.getTime() - a.data.addedAt.getTime(),
  );
}

export function groupWritingByYear(
  posts: WritingEntry[],
): Map<number, WritingEntry[]> {
  const groups = new Map<number, WritingEntry[]>();
  for (const post of posts) {
    const year = post.data.publishedAt.getFullYear();
    const bucket = groups.get(year) ?? [];
    bucket.push(post);
    groups.set(year, bucket);
  }
  return groups;
}

export function formatPostDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatWorkDateRange(start: string, end: string | null): string {
  const fmt = (s: string) => {
    const [y, m] = s.split('-');
    const date = new Date(Number(y), Number(m) - 1, 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };
  return `${fmt(start)} — ${end ? fmt(end) : 'Present'}`;
}
```

- [ ] **Step 2: Verify**

```bash
pnpm check
```

Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add typed collection query helpers"
```

---

### Task 8: Seed placeholder content

**Files:**
- Create: `src/content/writing/hello-world.mdx`
- Create: `src/content/work/plane.md`
- Create: `src/content/work/placeholder-prior-role.md`
- Create: `src/content/playlists/late-night-coding.md`

- [ ] **Step 1: Create `src/content/writing/hello-world.mdx`**

````mdx
---
title: "Hello, world"
description: "First post on the rebuilt vsriram.me. A note on what's coming."
publishedAt: 2026-05-16
draft: false
tags: ["meta"]
---

This is the first post on the rebuilt site. The old Next.js implementation
has been replaced with a static Astro setup — faster, simpler, dark by default.

## What's next

A few things I plan to write about:

- The architecture behind real-time sync engines
- Mentoring engineers through ambiguity
- Why open source is still the best leverage in software

Code blocks render with Shiki:

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

More soon.
````

- [ ] **Step 2: Create `src/content/work/plane.md`**

```md
---
company: "Plane Software, Inc."
role: "Principal Engineer"
startDate: "2022-08"
endDate: null
location: "Remote"
url: "https://plane.so"
order: 1
---

Leading engineering at one of the fastest-growing open-source project
management platforms. Architecture for distributed systems, real-time
collaboration, and the technical strategy that gets us from open-source
project to production-ready product.

*(Placeholder copy — fill in with real responsibilities.)*
```

- [ ] **Step 3: Create `src/content/work/placeholder-prior-role.md`**

```md
---
company: "Previous Company"
role: "Engineering Manager"
startDate: "2019-01"
endDate: "2022-07"
location: "Hyderabad, India"
order: 2
---

*(Placeholder — replace with real prior role from LinkedIn export.)*
```

- [ ] **Step 4: Create `src/content/playlists/late-night-coding.md`**

```md
---
title: "Late Night Coding"
spotifyId: "37i9dQZF1DXcBWIGoYBM5M"
description: "Lo-fi, ambient, instrumental only. Built for long focus blocks."
addedAt: 2026-05-16
---
```

- [ ] **Step 5: Verify schemas pass**

```bash
pnpm check
```

Expected: 0 errors. If any frontmatter is malformed, the error will point to the file and field.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "content: seed placeholder posts, work entries, and playlist"
```

---

### Task 9: Move profile image into `src/assets/`

**Files:**
- Move: `public/images/profile.jpg` → `src/assets/images/profile.jpg`

- [ ] **Step 1: Move the image**

```bash
mkdir -p src/assets/images
git mv public/images/profile.jpg src/assets/images/profile.jpg
```

If `public/images/profile.jpg` doesn't exist (because it was wiped in Task 1 — it shouldn't have been since `public/` was preserved, but verify), restore it first:

```bash
git checkout HEAD~N -- public/images/profile.jpg   # N = commits since wipe; only if needed
```

- [ ] **Step 2: Confirm**

```bash
ls src/assets/images/
```

Expected: `profile.jpg` listed.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: move profile image into src/assets for Astro Image optimization"
```

---

### Task 10: `Eyebrow` and `SocialLinks` components

**Files:**
- Create: `src/components/Eyebrow.astro`
- Create: `src/components/SocialLinks.astro`

- [ ] **Step 1: Create `src/components/Eyebrow.astro`**

```astro
---
interface Props {
  class?: string;
}
const { class: className = '' } = Astro.props;
---

<span
  class={`block font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent ${className}`}
>
  <slot />
</span>
```

- [ ] **Step 2: Create `src/components/SocialLinks.astro`**

```astro
---
import { Github, Twitter, Linkedin } from 'lucide-astro';
import { site } from '~/lib/site';

interface Props {
  class?: string;
}
const { class: className = '' } = Astro.props;

const items = [
  { label: 'GitHub', href: site.socials.github, Icon: Github },
  { label: 'Twitter', href: site.socials.twitter, Icon: Twitter },
  { label: 'LinkedIn', href: site.socials.linkedin, Icon: Linkedin },
];
---

<ul class={`flex items-center gap-5 ${className}`}>
  {
    items.map(({ label, href, Icon }) => (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noreferrer me"
          aria-label={label}
          class="text-muted transition-colors duration-150 hover:text-accent"
        >
          <Icon size={18} strokeWidth={1.5} />
        </a>
      </li>
    ))
  }
</ul>
```

- [ ] **Step 3: Verify**

```bash
pnpm check
```

Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Eyebrow and SocialLinks components"
```

---

### Task 11: `Navbar` component

**Files:**
- Create: `src/components/Navbar.astro`

- [ ] **Step 1: Create `src/components/Navbar.astro`**

```astro
---
import { site } from '~/lib/site';

const currentPath = Astro.url.pathname.replace(/\/$/, '') || '/';

function isActive(href: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath === href || currentPath.startsWith(`${href}/`);
}
---

<header class="mx-auto flex max-w-content items-baseline justify-between pt-12">
  <a href="/" class="font-serif text-[15px] font-semibold tracking-tight text-text no-underline">
    {site.shortName}<span class="text-accent">.</span>
  </a>

  <nav aria-label="Primary">
    <ul class="flex items-center gap-6 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
      {
        site.nav.map((item) => {
          const active = isActive(item.href);
          return (
            <li>
              <a
                href={item.href}
                class={`group relative transition-colors duration-150 hover:text-text ${
                  active ? 'text-text' : ''
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
                <span
                  class={`absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent transition-opacity duration-150 ${
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                  }`}
                ></span>
              </a>
            </li>
          );
        })
      }
    </ul>
  </nav>
</header>
```

- [ ] **Step 2: Verify**

```bash
pnpm check
```

Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Navbar with active route underline"
```

---

### Task 12: `Footer` component

**Files:**
- Create: `src/components/Footer.astro`

- [ ] **Step 1: Create `src/components/Footer.astro`**

```astro
---
import SocialLinks from '~/components/SocialLinks.astro';
import { site } from '~/lib/site';

const year = new Date().getFullYear();
---

<footer class="mx-auto mt-24 max-w-content border-t border-border-soft pb-16 pt-10">
  <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
    <SocialLinks />
    <p class="font-sans text-[11px] uppercase tracking-[0.16em] text-muted-2">
      © {year} {site.shortName} · Built with Astro
    </p>
  </div>
</footer>
```

- [ ] **Step 2: Verify**

```bash
pnpm check
```

Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Footer component"
```

---

### Task 13: `BaseLayout`

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `public/robots.txt`

- [ ] **Step 1: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://vsriram.me/sitemap-index.xml
```

- [ ] **Step 2: Create `src/layouts/BaseLayout.astro`**

```astro
---
import '~/styles/globals.css';
import Navbar from '~/components/Navbar.astro';
import Footer from '~/components/Footer.astro';
import { site } from '~/lib/site';

interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article';
}

const {
  title,
  description = site.description,
  ogImage = site.defaultOgImage,
  canonical = new URL(Astro.url.pathname, site.url).toString(),
  type = 'website',
} = Astro.props;

const fullTitle = title ? `${title} · ${site.shortName}` : site.name;
const fullOgImage = new URL(ogImage, site.url).toString();
---

<!doctype html>
<html lang="en" class="bg-bg text-text">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="generator" content={Astro.generator} />

    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="alternate" type="application/rss+xml" title={site.name} href="/rss.xml" />

    <meta property="og:type" content={type} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:site_name" content={site.name} />
    <meta property="og:image" content={fullOgImage} />
    <meta property="og:locale" content={site.locale} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={fullOgImage} />
  </head>

  <body class="min-h-screen bg-bg text-text antialiased">
    <div class="px-7 sm:px-14">
      <Navbar />
      <main class="mx-auto mt-12 max-w-content">
        <slot />
      </main>
      <Footer />
    </div>
  </body>
</html>
```

- [ ] **Step 3: Verify**

```bash
pnpm check
```

Expected: 0 errors. (No pages use it yet, but it must type-check.)

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add BaseLayout with full meta and robots.txt"
```

---

### Task 14: Home page (`/`)

**Files:**
- Create: `src/pages/index.astro`

- [ ] **Step 1: Create `src/pages/index.astro`**

```astro
---
import { Image } from 'astro:assets';
import BaseLayout from '~/layouts/BaseLayout.astro';
import Eyebrow from '~/components/Eyebrow.astro';
import SocialLinks from '~/components/SocialLinks.astro';
import profile from '~/assets/images/profile.jpg';
import { getLatestWritingPosts, formatPostDate } from '~/lib/collections';
import { site } from '~/lib/site';

const latest = await getLatestWritingPosts(3);
---

<BaseLayout>
  <section class="pt-4">
    <Eyebrow>Principal Engineer · Plane Software</Eyebrow>

    <h1 class="mt-4 font-serif text-[clamp(28px,5vw,38px)] font-medium leading-[1.08] tracking-tight text-text">
      Building systems that <em class="font-medium not-italic text-accent italic">scale</em>, and the teams that ship them.
    </h1>

    <p class="mt-5 max-w-[560px] font-serif text-[17px] leading-[1.55] text-text-2">
      Hey, I'm Sriram — a software architect and engineering manager
      passionate about empowering businesses through transformative software.
    </p>

    <p class="mt-4 max-w-[560px] font-serif text-[15px] leading-[1.65] text-text-3">
      I lead engineering at Plane, one of the fastest-growing open-source
      project management platforms. My focus: cloud-native architecture,
      distributed systems, and helping engineers reach their full potential.
    </p>

    <div class="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <SocialLinks />
      <p class="font-sans text-[12px] italic text-muted-2">{site.location}</p>
    </div>

    <Image
      src={profile}
      alt={site.name}
      width={1024}
      height={1024}
      class="sr-only"
    />
  </section>

  {
    latest.length > 0 && (
      <section class="mt-14">
        <p class="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-2">
          Latest Writing
        </p>
        <ul class="mt-4 divide-y divide-border-soft">
          {latest.map((post) => (
            <li>
              <a
                href={`/writing/${post.slug}`}
                class="group flex items-baseline justify-between py-3 no-underline"
              >
                <span class="font-serif text-[15px] text-text-2 transition-colors duration-150 group-hover:text-accent">
                  {post.data.title}
                </span>
                <span class="font-sans text-[11px] tracking-wide text-muted-2">
                  {formatPostDate(post.data.publishedAt)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    )
  }
</BaseLayout>
```

Note: the `<Image>` component with `sr-only` ensures the profile image is included in the asset graph (so it's available for future use / OG images) without affecting layout. If you want it visible, the design hasn't asked for it on the home page — keep it accessible-only for now.

- [ ] **Step 2: Verify it builds and renders**

```bash
pnpm build
pnpm dev
```

Then open `http://localhost:4321/` in your browser.

Expected:
- Dark background, serif headline with orange italic "scale"
- Orange eyebrow text above the headline
- Bio paragraphs, social icons row, location at right
- "Latest Writing" section with one entry (hello-world)
- Navbar at top with "About" active (orange underline)
- Footer at bottom

Stop the dev server (Ctrl+C) after verifying.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add home page with hero and latest writing"
```

---

### Task 15: `TimelineEntry` component + `/work` page

**Files:**
- Create: `src/components/TimelineEntry.astro`
- Create: `src/pages/work.astro`

- [ ] **Step 1: Create `src/components/TimelineEntry.astro`**

```astro
---
import { formatWorkDateRange } from '~/lib/collections';

interface Props {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location?: string;
  url?: string;
}

const { company, role, startDate, endDate, location, url } = Astro.props;
const dateRange = formatWorkDateRange(startDate, endDate);
const current = endDate === null;
---

<article class="grid grid-cols-1 gap-2 border-b border-border-soft py-7 sm:grid-cols-[180px_1fr]">
  <div class="font-sans text-[12px] uppercase tracking-[0.14em] text-muted-2">
    {dateRange}
    {current && <span class="ml-2 text-accent">●</span>}
  </div>

  <div>
    <h2 class="font-serif text-[20px] font-medium leading-tight text-text">
      {role}
      <span class="text-muted"> · </span>
      {
        url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            class="text-text-2 underline decoration-border decoration-1 underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
          >
            {company}
          </a>
        ) : (
          <span class="text-text-2">{company}</span>
        )
      }
    </h2>
    {
      location && (
        <p class="mt-1 font-sans text-[12px] italic text-muted-2">{location}</p>
      )
    }

    <div class="prose-invert prose mt-3 max-w-none font-serif text-[15px] leading-[1.65] text-text-3">
      <slot />
    </div>
  </div>
</article>
```

- [ ] **Step 2: Create `src/pages/work.astro`**

```astro
---
import BaseLayout from '~/layouts/BaseLayout.astro';
import Eyebrow from '~/components/Eyebrow.astro';
import TimelineEntry from '~/components/TimelineEntry.astro';
import { getWorkEntries } from '~/lib/collections';

const entries = await getWorkEntries();
---

<BaseLayout title="Work" description="Career timeline.">
  <section class="pt-4">
    <Eyebrow>Career</Eyebrow>
    <h1 class="mt-4 font-serif text-[clamp(28px,5vw,38px)] font-medium leading-[1.08] tracking-tight">
      Work
    </h1>
    <p class="mt-4 max-w-[560px] font-serif text-[15px] leading-[1.6] text-text-3">
      A timeline of the roles, teams, and problems I've worked on.
    </p>
  </section>

  <section class="mt-10">
    {
      entries.map(async (entry) => {
        const { Content } = await entry.render();
        return (
          <TimelineEntry
            company={entry.data.company}
            role={entry.data.role}
            startDate={entry.data.startDate}
            endDate={entry.data.endDate}
            location={entry.data.location}
            url={entry.data.url}
          >
            <Content />
          </TimelineEntry>
        );
      })
    }
  </section>
</BaseLayout>
```

- [ ] **Step 3: Verify**

```bash
pnpm build
pnpm dev
```

Open `http://localhost:4321/work`.

Expected:
- Same nav/footer chrome as home, with "Work" active (orange underline)
- "CAREER" eyebrow + large "Work" heading
- Two timeline entries (Plane current with orange dot, prior role with end date)
- Each entry shows date range on the left (desktop) and role/company + body on the right

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add /work page with timeline entries"
```

---

### Task 16: `PostCard` component + `/writing` index

**Files:**
- Create: `src/components/PostCard.astro`
- Create: `src/pages/writing/index.astro`

- [ ] **Step 1: Create `src/components/PostCard.astro`**

```astro
---
import { formatPostDate } from '~/lib/collections';

interface Props {
  slug: string;
  title: string;
  description?: string;
  publishedAt: Date;
}

const { slug, title, description, publishedAt } = Astro.props;
---

<a
  href={`/writing/${slug}`}
  class="group flex flex-col gap-1 border-b border-border-soft py-4 no-underline sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
>
  <div class="min-w-0 flex-1">
    <h3 class="font-serif text-[16px] font-medium text-text-2 transition-colors duration-150 group-hover:text-accent">
      {title}
    </h3>
    {
      description && (
        <p class="mt-1 font-serif text-[13px] leading-[1.5] text-muted">{description}</p>
      )
    }
  </div>
  <time
    datetime={publishedAt.toISOString()}
    class="shrink-0 font-sans text-[11px] tracking-wide text-muted-2"
  >
    {formatPostDate(publishedAt)}
  </time>
</a>
```

- [ ] **Step 2: Create `src/pages/writing/index.astro`**

```astro
---
import BaseLayout from '~/layouts/BaseLayout.astro';
import Eyebrow from '~/components/Eyebrow.astro';
import PostCard from '~/components/PostCard.astro';
import { getWritingPosts, groupWritingByYear } from '~/lib/collections';

const posts = await getWritingPosts();
const grouped = Array.from(groupWritingByYear(posts).entries()).sort(
  (a, b) => b[0] - a[0],
);
---

<BaseLayout title="Writing" description="Essays and notes on engineering, systems, and teams.">
  <section class="pt-4">
    <Eyebrow>Essays &amp; Notes</Eyebrow>
    <h1 class="mt-4 font-serif text-[clamp(28px,5vw,38px)] font-medium leading-[1.08] tracking-tight">
      Writing
    </h1>
    <p class="mt-4 max-w-[560px] font-serif text-[15px] leading-[1.6] text-text-3">
      Notes on distributed systems, open source, and the craft of building software at scale.
    </p>
  </section>

  <section class="mt-10">
    {
      posts.length === 0 ? (
        <p class="font-serif text-[15px] italic text-muted">No posts yet.</p>
      ) : (
        grouped.map(([year, entries]) => (
          <div class="mt-8 first:mt-0">
            <p class="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-2">
              {year}
            </p>
            <div class="mt-2">
              {entries.map((post) => (
                <PostCard
                  slug={post.slug}
                  title={post.data.title}
                  description={post.data.description}
                  publishedAt={post.data.publishedAt}
                />
              ))}
            </div>
          </div>
        ))
      )
    }
  </section>
</BaseLayout>
```

- [ ] **Step 3: Verify**

```bash
pnpm build
pnpm dev
```

Open `http://localhost:4321/writing`.

Expected:
- "Writing" page with year heading "2026" and one post card ("Hello, world")
- Hover the title — it turns orange
- Nav shows "Writing" active

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add /writing index with year grouping"
```

---

### Task 17: `Prose` + `PostLayout` + dynamic `/writing/[slug]`

**Files:**
- Create: `src/components/Prose.astro`
- Create: `src/layouts/PostLayout.astro`
- Create: `src/pages/writing/[slug].astro`

- [ ] **Step 1: Create `src/components/Prose.astro`**

```astro
---
interface Props {
  class?: string;
}
const { class: className = '' } = Astro.props;
---

<div
  class={`prose prose-invert max-w-none font-serif text-[17px] leading-[1.7] ${className}`}
>
  <slot />
</div>
```

- [ ] **Step 2: Create `src/layouts/PostLayout.astro`**

```astro
---
import BaseLayout from '~/layouts/BaseLayout.astro';
import Prose from '~/components/Prose.astro';
import Eyebrow from '~/components/Eyebrow.astro';
import { formatPostDate } from '~/lib/collections';

interface Props {
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
}

const { title, description, publishedAt, updatedAt } = Astro.props;
---

<BaseLayout title={title} description={description} type="article">
  <article class="pt-4">
    <Eyebrow>Writing</Eyebrow>
    <h1 class="mt-4 font-serif text-[clamp(28px,5vw,38px)] font-medium leading-[1.1] tracking-tight">
      {title}
    </h1>

    <div class="mt-4 flex items-center gap-3 font-sans text-[12px] text-muted-2">
      <time datetime={publishedAt.toISOString()}>{formatPostDate(publishedAt)}</time>
      {
        updatedAt && (
          <>
            <span>·</span>
            <span>Updated {formatPostDate(updatedAt)}</span>
          </>
        )
      }
    </div>

    <hr class="my-9 border-0 border-t border-border-soft" />

    <Prose>
      <slot />
    </Prose>

    <div class="mt-16 border-t border-border-soft pt-6">
      <a
        href="/writing"
        class="font-sans text-[12px] uppercase tracking-[0.16em] text-muted transition-colors duration-150 hover:text-accent"
      >
        ← Back to Writing
      </a>
    </div>
  </article>
</BaseLayout>
```

- [ ] **Step 3: Create `src/pages/writing/[slug].astro`**

```astro
---
import type { GetStaticPaths } from 'astro';
import PostLayout from '~/layouts/PostLayout.astro';
import { getWritingPosts } from '~/lib/collections';

export const getStaticPaths = (async () => {
  const posts = await getWritingPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}) satisfies GetStaticPaths;

const { post } = Astro.props;
const { Content } = await post.render();
---

<PostLayout
  title={post.data.title}
  description={post.data.description}
  publishedAt={post.data.publishedAt}
  updatedAt={post.data.updatedAt}
>
  <Content />
</PostLayout>
```

- [ ] **Step 4: Verify**

```bash
pnpm build
pnpm dev
```

Open `http://localhost:4321/writing/hello-world`.

Expected:
- "WRITING" eyebrow, post title in serif, publish date below
- Body rendered with prose styling — h2 bold, paragraphs, bullet list
- Code block with `github-dark-dimmed` syntax highlighting
- "← Back to Writing" link at the bottom

Also confirm clicking the title from `/writing` navigates here.

Stop dev server.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: render individual MDX posts at /writing/[slug]"
```

---

### Task 18: `PlaylistEmbed` component + `/playlists` page

**Files:**
- Create: `src/components/PlaylistEmbed.astro`
- Create: `src/pages/playlists.astro`

- [ ] **Step 1: Create `src/components/PlaylistEmbed.astro`**

```astro
---
interface Props {
  title: string;
  spotifyId: string;
  description?: string;
}

const { title, spotifyId, description } = Astro.props;
const embedSrc = `https://open.spotify.com/embed/playlist/${spotifyId}?utm_source=generator&theme=0`;
const openUrl = `https://open.spotify.com/playlist/${spotifyId}`;
---

<section class="mb-10">
  <h2 class="font-serif text-[20px] font-medium text-text">{title}</h2>
  {
    description && (
      <p class="mt-1 font-serif text-[14px] text-text-3">{description}</p>
    )
  }
  <div class="mt-4 overflow-hidden rounded-md border border-border">
    <iframe
      src={embedSrc}
      width="100%"
      height="352"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={`Spotify playlist: ${title}`}
      class="block bg-bg-soft"
    ></iframe>
  </div>
  <a
    href={openUrl}
    target="_blank"
    rel="noreferrer"
    class="mt-2 inline-block font-sans text-[11px] uppercase tracking-[0.14em] text-muted-2 transition-colors duration-150 hover:text-accent"
  >
    Open in Spotify ↗
  </a>
</section>
```

- [ ] **Step 2: Create `src/pages/playlists.astro`**

```astro
---
import BaseLayout from '~/layouts/BaseLayout.astro';
import Eyebrow from '~/components/Eyebrow.astro';
import PlaylistEmbed from '~/components/PlaylistEmbed.astro';
import { getPlaylists } from '~/lib/collections';

const playlists = await getPlaylists();
---

<BaseLayout title="Playlists" description="Music I've been listening to.">
  <section class="pt-4">
    <Eyebrow>Listening</Eyebrow>
    <h1 class="mt-4 font-serif text-[clamp(28px,5vw,38px)] font-medium leading-[1.08] tracking-tight">
      Playlists
    </h1>
    <p class="mt-4 max-w-[560px] font-serif text-[15px] leading-[1.6] text-text-3">
      A small, slowly-growing collection of playlists I keep coming back to.
    </p>
  </section>

  <section class="mt-10">
    {
      playlists.length === 0 ? (
        <p class="font-serif text-[15px] italic text-muted">Nothing here yet.</p>
      ) : (
        playlists.map((p) => (
          <PlaylistEmbed
            title={p.data.title}
            spotifyId={p.data.spotifyId}
            description={p.data.description}
          />
        ))
      )
    }
  </section>
</BaseLayout>
```

- [ ] **Step 3: Verify**

```bash
pnpm build
pnpm dev
```

Open `http://localhost:4321/playlists`.

Expected:
- "Playlists" page with "Listening" eyebrow
- One Spotify embed (Late Night Coding) — note: embeds may render blank in some browser privacy modes, that's expected; the "Open in Spotify ↗" link should always work

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add /playlists with Spotify embeds and fallback links"
```

---

### Task 19: 404 page

**Files:**
- Create: `src/pages/404.astro`

- [ ] **Step 1: Create `src/pages/404.astro`**

```astro
---
import BaseLayout from '~/layouts/BaseLayout.astro';
import Eyebrow from '~/components/Eyebrow.astro';
---

<BaseLayout title="404" description="Page not found.">
  <section class="pt-12 text-center">
    <Eyebrow class="!text-muted-2">Error 404</Eyebrow>
    <h1 class="mt-4 font-serif text-[clamp(36px,8vw,72px)] font-medium leading-none tracking-tight">
      Not <em class="font-medium italic text-accent">here</em>.
    </h1>
    <p class="mx-auto mt-6 max-w-[420px] font-serif text-[15px] leading-[1.6] text-text-3">
      The page you're looking for doesn't exist — or it moved when the site was rebuilt.
    </p>
    <a
      href="/"
      class="mt-8 inline-block font-sans text-[12px] uppercase tracking-[0.16em] text-muted transition-colors duration-150 hover:text-accent"
    >
      ← Back to home
    </a>
  </section>
</BaseLayout>
```

- [ ] **Step 2: Verify**

```bash
pnpm build
pnpm dev
```

Open `http://localhost:4321/this-route-does-not-exist`.

Expected: 404 page renders with the same chrome as the rest of the site. Heading "Not here." with "here" in orange italic.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add custom 404 page"
```

---

### Task 20: RSS feed

**Files:**
- Create: `src/pages/rss.xml.ts`

- [ ] **Step 1: Create `src/pages/rss.xml.ts`**

```ts
import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getWritingPosts } from '~/lib/collections';
import { site } from '~/lib/site';

export const GET: APIRoute = async (context) => {
  const posts = await getWritingPosts();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.slug}`,
    })),
  });
};
```

- [ ] **Step 2: Verify**

```bash
pnpm build
pnpm preview
```

Open `http://localhost:4321/rss.xml`.

Expected: valid XML feed with one `<item>` for the hello-world post.

Optionally validate at https://validator.w3.org/feed/ (paste the XML).

Stop preview server.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: generate RSS feed for /writing"
```

---

### Task 21: Favicon

**Files:**
- Create: `public/favicon.svg`
- Delete: `public/favicon.ico` (if it exists from the old site)

- [ ] **Step 1: Create a minimal SVG favicon**

```bash
cat > public/favicon.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#0e0e0e"/>
  <text x="16" y="22" text-anchor="middle" font-family="Georgia, serif" font-weight="600" font-size="18" fill="#e8e6e3">S</text>
  <circle cx="24" cy="22" r="2" fill="#ff5722"/>
</svg>
EOF
```

- [ ] **Step 2: Remove old favicon.ico if present**

```bash
rm -f public/favicon.ico
```

- [ ] **Step 3: Verify**

```bash
pnpm build
pnpm dev
```

Open `http://localhost:4321/` — check the browser tab shows the new "S." favicon. Hard-refresh if needed.

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add SVG favicon matching the brand mark"
```

---

### Task 22: GitHub Actions CI

**Files:**
- Create: `.github/workflows/ci.yml`

- [ ] **Step 1: Create `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  push:
    branches: [main, master]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile

      - run: pnpm check

      - run: pnpm build
```

- [ ] **Step 2: Verify locally that the same commands pass**

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Expected: all three commands succeed. If `pnpm install --frozen-lockfile` fails because the lockfile is out of date, run `pnpm install` to refresh it and commit the lockfile change in this step.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "ci: add GitHub Actions workflow for check + build"
```

---

### Task 23: Rewrite `README.md`

**Files:**
- Modify: `README.md` (full rewrite)

- [ ] **Step 1: Overwrite `README.md`**

```md
# vsriram.me

Personal site — built with [Astro](https://astro.build), deployed to Cloudflare Pages.

## Develop

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:4321>.

## Scripts

| Command         | Description                                     |
| --------------- | ----------------------------------------------- |
| `pnpm dev`      | Astro dev server                                |
| `pnpm build`    | Production build to `dist/`                     |
| `pnpm preview`  | Serve the built site locally                    |
| `pnpm check`    | TypeScript + content collection schema check   |
| `pnpm format`   | Prettier across the repo                        |
| `pnpm lint`     | ESLint                                          |

## Content

- Blog posts: `src/content/writing/*.mdx`
- Work timeline: `src/content/work/*.md`
- Playlists: `src/content/playlists/*.md`

Schemas live in `src/content/config.ts`. The build fails loudly if frontmatter is wrong.

## Deployment

Cloudflare Pages builds from the default branch:

- Build command: `pnpm build`
- Output directory: `dist`
- Node version: 20

## License

MIT
```

- [ ] **Step 2: Verify it renders correctly**

```bash
# If you have a markdown previewer, open README.md; otherwise just check it parses
head -10 README.md
```

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: rewrite README for the Astro stack"
```

---

### Task 24: Rewrite `CLAUDE.md`

**Files:**
- Modify: `CLAUDE.md` (full rewrite)

- [ ] **Step 1: Overwrite `CLAUDE.md`**

```md
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
- `pnpm format` — Prettier write across the repo
- `pnpm lint` — ESLint (Astro + TypeScript)

There is no test suite. Verification is build-time: `pnpm check` (types, schemas, broken-link basics) + `pnpm build` (full static render) + manual browser verification via `pnpm dev`.

## Architecture

- **Astro 5** with `output: 'static'`. Pages are server-rendered at build time into pure HTML/CSS/JS.
- **Content collections** in `src/content/` — three collections (`writing`, `work`, `playlists`) with Zod schemas in `src/content/config.ts`. Malformed frontmatter is a build error.
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
```

- [ ] **Step 2: Verify**

```bash
head -5 CLAUDE.md
```

Expected: starts with `# CLAUDE.md`.

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: rewrite CLAUDE.md for the Astro stack"
```

---

### Task 25: Final full build, visual sweep, and merge prep

**Files:** none modified — verification only.

- [ ] **Step 1: Clean build from scratch**

```bash
rm -rf dist .astro node_modules
pnpm install
pnpm check
pnpm build
```

Expected: all three succeed with 0 errors. Output `dist/` contains `index.html`, `work/index.html` (or `work.html`), `writing/index.html`, `writing/hello-world/index.html` (or similar), `playlists/index.html`, `404.html`, `rss.xml`, `sitemap-index.xml`, `sitemap-0.xml`, plus assets.

- [ ] **Step 2: Preview and walk every route**

```bash
pnpm preview
```

Visit each of these and confirm everything looks right:

- `http://localhost:4321/` — home page, "About" active in nav
- `http://localhost:4321/work` — timeline with two entries
- `http://localhost:4321/writing` — index with "2026" year heading and one post
- `http://localhost:4321/writing/hello-world` — post body, prose styling, code block highlighted
- `http://localhost:4321/playlists` — Spotify embed + "Open in Spotify" link
- `http://localhost:4321/this-does-not-exist` — 404 page
- `http://localhost:4321/rss.xml` — valid XML feed

Also test:

- Resize browser narrow (~375px wide) — confirm layout doesn't break, padding adjusts, timeline stacks
- Hover post titles in `/writing` — turn orange
- Hover social icons in footer — turn orange
- Click "← Back to Writing" from a post — navigates back

Stop preview.

- [ ] **Step 3: Confirm clean git state**

```bash
git status
git log --oneline
```

Expected: working tree clean; commit history shows ~24 well-scoped commits on `feat/astro-rebuild`.

- [ ] **Step 4: Push and open PR**

```bash
git push -u origin feat/astro-rebuild
gh pr create --title "Rebuild vsriram.me on Astro" --body "$(cat <<'EOF'
## Summary

- Replaces the Next.js 15 implementation with a from-scratch Astro static site
- Dark-only editorial × magazine theme with orange (#ff5722) accent
- Four sections: Home, Work, Writing, Playlists; RSS feed; custom 404
- Content collections with Zod schemas for type-safe authoring
- Self-hosted fonts (Source Serif 4, Inter, JetBrains Mono) via Fontsource
- GitHub Actions CI runs astro check + build on every push/PR
- Targeting Cloudflare Pages

## Spec & plan

- Design: `docs/superpowers/specs/2026-05-16-astro-rebuild-design.md`
- Plan: `docs/superpowers/plans/2026-05-16-astro-rebuild.md`

## Test plan

- [x] `pnpm check` passes locally
- [x] `pnpm build` produces a complete `dist/`
- [x] Manual visual sweep of every route
- [ ] CI green on this PR
- [ ] Connect Cloudflare Pages preview deploy and confirm rendered output matches local preview
- [ ] After merge, verify production deploy at vsriram.me
EOF
)"
```

- [ ] **Step 5: Wait for CI green; do not merge until Cloudflare Pages preview is also verified visually**

After CI passes, the Cloudflare Pages preview URL (if configured) should be inspected before merging. Once both confirm, merge with a standard merge commit (not squash — preserves the bite-sized history).

---

## Self-review

Spec coverage check — every section of `2026-05-16-astro-rebuild-design.md` mapped to a task:

| Spec section                               | Task(s)              |
| ------------------------------------------ | -------------------- |
| Architecture (framework, output, integrations) | Task 2           |
| Pages & routes (/, /work, /writing, /writing/[slug], /playlists, /rss.xml, /404) | Tasks 14, 15, 16, 17, 18, 19, 20 |
| Content collections + Zod schemas           | Task 6               |
| `lib/site.ts`, `lib/collections.ts`         | Tasks 5, 7           |
| Component contracts (BaseLayout, PostLayout, Navbar, Footer, SocialLinks, Eyebrow, PostCard, TimelineEntry, PlaylistEmbed, Prose) | Tasks 10, 11, 12, 13, 15, 16, 17, 18 |
| Visual system (colors, type, spacing, motion, code blocks) | Task 4   |
| Error handling (schema failures, broken links, 404, Spotify fallback) | Tasks 6 (schemas), 19 (404), 18 (Spotify fallback); broken-link detection runs via `pnpm check` in every task |
| Build & deployment (Cloudflare, GH Action)  | Tasks 22, 23, 25     |
| Rebuild strategy (in-place clean slate, history preserved) | Task 1, 25 |
| Editor/format/lint config                   | Task 3               |
| Self-hosted fonts                           | Task 4 (imports), Task 2 (deps) |
| Favicon                                     | Task 21              |
| Profile image move                          | Task 9               |
| Placeholder seed content                    | Task 8               |
| Updated README, CLAUDE.md                   | Tasks 23, 24         |

No spec gaps identified.

Placeholder scan — no "TBD"/"TODO" in step bodies. Every code block contains the actual content. The seed content includes the phrase "Placeholder" intentionally — these are content placeholders for the user to replace, not plan placeholders.

Type consistency check:

- `getWritingPosts`, `getLatestWritingPosts`, `getWorkEntries`, `getPlaylists`, `groupWritingByYear`, `formatPostDate`, `formatWorkDateRange` — defined in Task 7, used identically in Tasks 14, 15, 16, 17, 18, 20. ✓
- `<Eyebrow>` accepts a `class` prop (Task 10), used with the `!text-muted-2` override in Task 19. ✓
- `<TimelineEntry>` prop names (`company`, `role`, `startDate`, `endDate`, `location`, `url`) match across schema (Task 6), helpers (Task 7), and consumer (Task 15). ✓
- `<PlaylistEmbed>` prop names (`title`, `spotifyId`, `description`) match schema (Task 6) and consumer (Task 18). ✓
- `<PostCard>` props (`slug`, `title`, `description`, `publishedAt`) match the consumer in Task 16. ✓
- `site.shortName`, `site.nav`, `site.socials.{github,twitter,linkedin}`, `site.location`, `site.description`, `site.defaultOgImage`, `site.locale`, `site.url`, `site.name` — defined in Task 5, used in Tasks 11, 12, 13, 14, 20. All references resolve. ✓

No issues found.
