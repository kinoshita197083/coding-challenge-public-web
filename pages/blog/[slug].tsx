import BlogPageCard from '@/components/blogs/BlogPageCard';
import { CONTENTFUL_BLOG_POSTS, getContentfulClient } from '../../lib/utils';
import CustomBreadcrumb from '@/components/blogs/CustomBreadcrumb';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

export default function BlogPost({ post, error }) {

    if (error) {
        return (
            <div className="max-w-3xl mx-auto py-16 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Blog Post</h1>
                <p className="mb-8">{error}</p>
                <a href="/blog" className="text-blue-500 hover:underline">
                    Return to Blog List
                </a>
            </div>
        );
    }


    if (!post) {
        return (
            <div className="max-w-3xl mx-auto py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
                <a href="/blog" className="text-blue-500 hover:underline">
                    Return to Blog List
                </a>
            </div>
        );
    }

    // Extract fields with safe fallbacks
    const imageUrl = post.fields?.featuredImage?.fields?.file?.url
        ? `https:${post.fields.featuredImage.fields.file.url}`
        : "/images/default-blog-image.webp";  // Fallback image
    const excerpt = post.fields?.excerpt;
    const title = post.fields?.title || "Untitled Post";
    const author = post.fields?.author || "Unknown Author";
    const publishedDate = post.fields?.publishedDate
        ? new Date(post.fields.publishedDate).toLocaleDateString("en-AU", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : "Publication date unknown";

    const content = post.fields?.content;

    return (
        <div className="space-y-16">
            <CustomBreadcrumb postTitle={title} />
            <BlogPageCard
                imageUrl={imageUrl}
                title={title}
                author={author}
                publishedDate={publishedDate}
            />

            <div className="max-w-3xl mx-auto">
                {excerpt && documentToReactComponents(excerpt, options)}
            </div>

            <div className="max-w-3xl mx-auto">
                {content && documentToReactComponents(content, options)}
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    try {
        // Fetch all blog posts from Contentful
        const contentfulClient = getContentfulClient();
        const entries = await contentfulClient.getEntries({
            content_type: CONTENTFUL_BLOG_POSTS,
        });

        const paths = entries.items.map((item) => ({
            params: { slug: item.fields.slug },
        }));

        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.error('Error fetching blog paths:', error);
        // Return empty paths array - build will continue but with no blog pages
        return {
            paths: [],
            fallback: false,
        };
    }
}

interface IParams extends ParsedUrlQuery {
    slug: string;
}

// Fetch data for each path
export const getStaticProps = async (context: GetStaticPropsContext) => {
    try {
        const { slug } = context.params as IParams;

        // Fetch the blog post for the given slug
        const contentfulClient = getContentfulClient();
        const entries = await contentfulClient.getEntries({
            content_type: CONTENTFUL_BLOG_POSTS,
            'fields.slug': slug,
            limit: 1,
        });

        const post = entries.items[0] || null;

        // If no post found, return notFound
        if (!post) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                post,
                error: null,
            },
        };
    } catch (error) {
        console.error(`Error fetching blog post for slug: ${context.params?.slug}`, error);

        return {
            props: {
                post: null,
                error: `Failed to load blog post. ${error instanceof Error ? error.message : 'Unknown error'}`,
            },
        };
    }
}

// https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/
const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <strong>{text}</strong>,
        [MARKS.ITALIC]: (text) => <em>{text}</em>,
        [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
        [MARKS.CODE]: (text) => <code className="bg-gray-100 px-1 py-0.5 rounded">{text}</code>,
    },
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-semibold tracking-tight my-6">{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-semibold tracking-tight mt-16 my-5">{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-semibold tracking-tight my-4">{children}</h3>,
        [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl font-semibold tracking-tight my-3">{children}</h4>,
        [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg font-semibold tracking-tight my-2">{children}</h5>,
        [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-base font-semibold tracking-tight my-1">{children}</h6>,
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-4 leading-7 [&:not(:first-child)]:mt-6">{children}</p>,
        [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-6 my-4">{children}</ul>,
        [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 my-4">{children}</ol>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="my-1">{children}</li>,
        [BLOCKS.HR]: () => <hr className="my-8 border-gray-300" />,
        [BLOCKS.QUOTE]: (node, children) => <blockquote className="border-l-4 border-gray-300 pl-4 py-1 my-4 italic">{children}</blockquote>,
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { data: { target: { fields } } } = node;
            return (
                <div className="my-4">
                    <Image
                        src={`https:${fields.file.url}`}
                        alt={fields.title || 'Embedded asset'}
                        width={600}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            );
        },
        [INLINES.HYPERLINK]: (node, children) => (
            <a
                href={node.data.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                {children}
            </a>
        ),
    },
};