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
      link: `/writing/${post.id}`,
    })),
  });
};
