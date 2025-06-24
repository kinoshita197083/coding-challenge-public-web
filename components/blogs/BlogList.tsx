import React from "react";
import BlogItem from "./BlogItem";
import { ContentfulEntries, Entries } from "../../types/contentful/content";
import { Card } from "../ui/card";
import { ZellerLogo } from "../Logo";

const BlogList: React.FC<ContentfulEntries> = ({ entries }) => (
    <section className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 mt-4">
            {/* <ZellerLogo /> */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-4 mb-2 text-center">
                Zeller Business Blog
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-2xl">
                Insights, news, and resources for modern businesses. Stay ahead with Zeller's expert advice and fintech updates.
            </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {entries.map((entry: Entries) => {
                console.log('------> entry:', entry);
                const blogPost = {
                    id: entry.sys.id,
                    title: entry.fields.title,
                    slug: entry.fields.slug,
                    content: entry.fields.content,
                    author: entry.fields.author,
                    date: entry.fields.publishedDate,
                    tags: entry.fields.tags,
                    image: entry.fields.featuredImage,
                }
                return (
                    <li key={entry.sys.id} className="h-full">
                        <Card className="h-full flex flex-col pt-0">
                            <BlogItem blogPost={blogPost} />
                        </Card>
                    </li>
                )
            })}
        </ul>
    </section>
);

export default BlogList; 