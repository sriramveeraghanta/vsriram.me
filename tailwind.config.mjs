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
