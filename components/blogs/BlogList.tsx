import React from "react";
import { Card } from "../ui/card";
import FeaturedBlogPost from "./FeaturedBlogPost";
import { BlogPost } from "@/types/blogs/blog";
import BlogItem from "./Blog";

type BlogListProps = {
    blogs: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    // Extract the first entry for the featured post
    const featuredBlog = blogs.length > 0 ? blogs[0] : null;
    // The rest of the entries for the regular grid
    const regularBlogs = blogs.length > 0 ? blogs.slice(1) : [];

    return (
        <section className="max-w-6xl mx-auto">
            {featuredBlog && (
                <FeaturedBlogPost featuredEntry={featuredBlog} />
            )}

            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularBlogs.map((blog: BlogPost) => {
                    return (
                        <li key={blog.sys.id} className="h-full">
                            <Card className="h-full flex flex-col pt-0">
                                <BlogItem blogPost={blog} />
                            </Card>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export default BlogList; 