import rss from '@astrojs/rss'
import { getCollection } from "astro:content";

export async function GET(ctx) {
    const posts = await getCollection("blog");
    return rss({
        title: 'kittiez rss',
        description: 'hewwo!!1',
        site: ctx.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}`,
        })),
        customData: `<language>en-us</language>`,
    })    
}