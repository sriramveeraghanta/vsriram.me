import { getCollection, type CollectionEntry } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;
export type WorkEntry = CollectionEntry<'work'>;
export type PlaylistEntry = CollectionEntry<'playlists'>;

export async function getWritingPosts(): Promise<WritingEntry[]> {
  const all = await getCollection('writing', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return all.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
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
  return all.sort((a, b) => b.data.addedAt.getTime() - a.data.addedAt.getTime());
}

export function groupWritingByYear(posts: WritingEntry[]): Map<number, WritingEntry[]> {
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
