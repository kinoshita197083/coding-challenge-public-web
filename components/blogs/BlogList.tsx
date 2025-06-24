import React from "react";
import BlogItem from "./BlogItem";
import { ContentfulEntries, Entries } from "../../types/contentful/content";

const BlogList: React.FC<ContentfulEntries> = ({ entries }) => (
    <>
        <h1 className="text-2xl font-bold mb-4">Zeller Business Blog</h1>
        <ul className="space-y-2">
            {entries.map((entry: Entries) => {
                const blogPost = {
                    id: entry.sys.id,
                    title: entry.fields.title,
                    slug: entry.fields.slug,
                    content: entry.fields.content,
                    author: entry.fields.author,
                    date: entry.fields.date,
                    tags: entry.fields.tags,
                    image: entry.fields.image,
                    isFeatured: entry.fields.isFeatured,
                }
                return (
                    <BlogItem key={entry.sys.id} blogPost={blogPost} />
                )
            })}
        </ul>
    </>
);

export default BlogList; 