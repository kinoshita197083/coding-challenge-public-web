import React from "react";
import BlogItem from "./BlogItem";
import { ContentfulEntries, Entries } from "../../types/contentful/content";
import { Card } from "../ui/card";
import { ZellerLogo } from "../Logo";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import FeaturedBlogPost from "./FeaturedBlogPost";

const BlogList: React.FC<ContentfulEntries> = ({ entries }) => {
    // Extract the first entry for the featured post
    const featuredEntry = entries.length > 0 ? entries[0] : null;
    // The rest of the entries for the regular grid
    const regularEntries = entries.length > 0 ? entries.slice(1) : [];

    const createBlogPostObject = (entry: Entries) => ({
        id: entry.sys.id,
        title: entry.fields.title,
        slug: entry.fields.slug,
        content: entry.fields.content,
        author: entry.fields.author,
        date: entry.fields.publishedDate,
        tags: entry.fields.tags,
        image: entry.fields.featuredImage,
    });

    return (
        <section className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden py-12 mb-12">
                <div className="relative flex flex-col items-center px-4">
                    <div className="p-2 bg-white/20 rounded-full shadow-sm border border-slate-100 px-4 mb-6 backdrop-blur-sm ">
                        <ZellerLogo />
                    </div>

                    <div className="w-16 h-1 bg-gradient-to-r from-black to-slate-500 rounded-full mb-6"></div>

                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 text-center">
                        Zeller Business Blog
                    </h1>

                    <p className="text-lg text-muted-foreground text-center max-w-2xl mb-8">
                        Insights, news, and resources for modern businesses. Stay ahead with Zeller's expert advice and fintech updates.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button variant="default" className="text-white bg-zinc-800
                         hover:bg-slate-800">
                            Subscribe to Newsletter
                        </Button>
                        <Button variant="outline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                            Search Articles
                        </Button>
                    </div>
                </div>
            </div>

            {featuredEntry && (
                <FeaturedBlogPost featuredEntry={featuredEntry} />
            )}

            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularEntries.map((entry: Entries) => {
                    const blogPost = createBlogPostObject(entry);
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
};

export default BlogList; 