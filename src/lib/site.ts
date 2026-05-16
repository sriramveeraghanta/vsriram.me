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
