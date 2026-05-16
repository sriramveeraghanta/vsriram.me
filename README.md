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
| `pnpm format`   | oxfmt across JS/TS/JSON/CSS (`.astro` skipped)  |
| `pnpm lint`     | oxlint                                          |

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
