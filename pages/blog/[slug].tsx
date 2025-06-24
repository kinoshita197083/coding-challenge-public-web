import { CONTENTFUL_CONTENT_TYPE, contentfulClient } from '../../lib/utils'; // adjust path as needed

export default function BlogPost({ post }) {
    console.log('[slug] post', post);
    return (
        <div>
            <h1>{post.fields.title}</h1>
            {/* <p>{post.content}</p> */}
        </div>
    )
}

// Tell Next.js which dynamic routes to pre-render
export const getStaticPaths = async () => {
    // Fetch all blog posts from Contentful
    const entries = await contentfulClient.getEntries({
        content_type: CONTENTFUL_CONTENT_TYPE,
    });

    console.log('[slug] entries', entries);

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
    const entries = await contentfulClient.getEntries({
        content_type: CONTENTFUL_CONTENT_TYPE,
        'fields.slug': params.slug,
        limit: 1,
    });

    console.log('[slug] entries', entries);

    const post = entries.items[0] || null;

    return {
        props: {
            post,
        },
        // revalidate: 60 // Optional: ISR (Incremental Static Regeneration)
    }
}