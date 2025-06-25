// Blog Item Component
// This component is used to display a single blog post in the blog list / blog page

import Link from "next/link";
import { CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { BlogPost } from "@/types/blogs/blog";
import Image from "next/image";

export default function BlogItem({ blogPost }: { blogPost: BlogPost }) {
    // Destructure the blog post fields
    const featuredImage = blogPost.fields?.featuredImage;
    const imageUrl = featuredImage ? `https:${featuredImage.fields?.file?.url}` : null;
    const publishedDate = blogPost.fields?.publishedDate;
    const author = blogPost.fields?.author;
    const tags = blogPost.fields?.tags;
    const title = blogPost.fields?.title;
    const slug = blogPost.fields?.slug;

    console.log('[BlogItem] imageUrl', blogPost.fields?.featuredImage);

    // Format the published date
    const postDate = new Date(publishedDate).toLocaleDateString("en-AU", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <article aria-labelledby={`blog-title-${slug}`} className="flex flex-col h-full">
            <Link
                href={`/blog/${slug}`}
                className="flex flex-col h-full group"
                aria-labelledby={`blog-title-${slug}`}
            >
                {imageUrl && (
                    <CardHeader className="p-0 overflow-hidden rounded-t-xl">
                        <Image
                            src={imageUrl}
                            width={300}
                            height={300}
                            alt={`Featured image for article: ${title}`}
                            className="w-full h-48 object-cover md:h-56 lg:h-64 transition-transform duration-300 group-hover:scale-105"
                        />
                    </CardHeader>
                )}
                <CardContent className="flex flex-col flex-1 p-4">
                    <CardTitle id={`blog-title-${slug}`} className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                        {title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500 mb-2">
                        By {author}
                    </CardDescription>
                    <time dateTime={publishedDate} className="text-xs text-gray-500 mb-2">
                        {postDate}
                    </time>
                </CardContent>
                <CardFooter className="mt-auto flex flex-wrap gap-2 p-4 pt-0">
                    {tags && tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-600">{tag}</span>
                    ))}
                    <Button
                        variant="link"
                        className="ml-auto"
                        aria-label={`Read more about ${title}`}
                    >
                        Read More
                    </Button>
                </CardFooter>
            </Link>
        </article>
    );
}