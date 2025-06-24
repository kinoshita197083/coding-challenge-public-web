// Blog Item Component
// This component is used to display a single blog post in the blog list / blog page

import Link from "next/link";

type BlogItemProps = {
    blogPost: {
        id: string;
        title: string;
        slug: string;
        content: string;
        author: string;
        date: string;
        tags: string[];
        image: string;
        isFeatured: boolean;
    };
};

export default function BlogItem({ blogPost }: BlogItemProps) {
    return (
        <Link href={`/blog/${blogPost.slug}`}>
            <div className="bg-white shadow p-4 rounded">
                <h2>{blogPost.title}</h2>
                <p>{blogPost.slug}</p>
                <p>{blogPost.author}</p>
                {/* <p>{blogPost.content}</p>
            <p>{blogPost.date}</p>
            <p>{blogPost.tags.join(", ")}</p>
            <p>{blogPost.image}</p>
            <p>{blogPost.isFeatured ? "Yes" : "No"}</p> */}
            </div>
        </Link>
    );
}