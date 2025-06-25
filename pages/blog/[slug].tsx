import BlogPageCard from '@/components/blogs/BlogPageCard';
import { CONTENTFUL_BLOG_POSTS, getContentfulClient } from '../../lib/utils';
import CustomBreadcrumb from '@/components/blogs/CustomBreadcrumb';
import ContentfulRichText from '@/components/blogs/ContentfulRichText';

export default function BlogPost({ post }) {
    // console.log('[slug] post', post.fields.content);

    const imageUrl = `https:${post.fields.featuredImage.fields.file.url}`;
    const excerpt = post.fields.excerpt;
    const title = post.fields.title;
    const author = post.fields.author;
    const publishedDate = new Date(post.fields.publishedDate).toLocaleDateString("en-AU", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const content = post.fields.content;
    content.content.forEach(item => {
        console.log('[slug] item', item);
    });

    return (
        <div className="space-y-16">
            <CustomBreadcrumb postTitle={post.fields.title} />
            <BlogPageCard
                imageUrl={imageUrl}
                title={title}
                author={author}
                publishedDate={publishedDate}
            />

            <div className="max-w-3xl mx-auto">
                <ContentfulRichText content={excerpt.content} />
            </div>

            <div className="max-w-3xl mx-auto">
                <ContentfulRichText content={content.content} />
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    // Fetch all blog posts from Contentful
    const contentfulClient = getContentfulClient();
    const entries = await contentfulClient.getEntries({
        content_type: CONTENTFUL_BLOG_POSTS,
    });

    // console.log('[slug] entries', entries);

    const paths = entries.items.map((item) => ({
        params: { slug: item.fields.slug },
    }));

    return {
        paths,
        fallback: false,
    }
}

// Fetch data for each path
export const getStaticProps = async ({ params }) => {
    // Fetch the blog post for the given slug
    const contentfulClient = getContentfulClient();
    const entries = await contentfulClient.getEntries({
        content_type: CONTENTFUL_BLOG_POSTS,
        'fields.slug': params.slug,
        limit: 1,
    });

    // console.log('[slug] entries', entries);

    const post = entries.items[0] || null;

    return {
        props: {
            post,
        },
        // revalidate: 60  // ISR (Incremental Static Regeneration)
    }
}