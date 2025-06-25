// Blog Item Component
// This component is used to display a single blog post in the blog list / blog page

import Link from "next/link";
import { CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { BlogPost } from "@/types/blogs/blog";

export default function BlogItem({ blogPost }: { blogPost: BlogPost }) {
    // Destructure the blog post fields
    const imageUrl = blogPost.fields?.featuredImage?.fields?.file?.url;
    const publishedDate = blogPost.fields?.publishedDate;
    const author = blogPost.fields?.author;
    const tags = blogPost.fields?.tags;
    const title = blogPost.fields?.title;
    const slug = blogPost.fields?.slug;

    // Format the published date
    const postDate = new Date(publishedDate).toLocaleDateString("en-AU", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <Link href={`/blog/${slug}`} className="flex flex-col h-full group">
            <CardHeader className="p-0 overflow-hidden rounded-t-xl">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-48 object-cover md:h-56 lg:h-64 transition-transform duration-300 group-hover:scale-105"
                    />
                )}
            </CardHeader>
            <CardContent className="flex flex-col flex-1 p-4">
                <CardTitle className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                    {title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 mb-2">
                    By {author}
                </CardDescription>
                <CardDescription className="text-xs text-gray-500 mb-2">
                    {postDate}
                </CardDescription>
                {/* <p className="text-gray-700 text-sm line-clamp-3 mb-4 flex-1">{blogPost.content}</p> */}
            </CardContent>
            <CardFooter className="mt-auto flex flex-wrap gap-2 p-4 pt-0">
                {tags && tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-600">{tag}</span>
                ))}
                <Button variant="link" className="ml-auto">Read More</Button>
            </CardFooter>
        </Link>
    );
}