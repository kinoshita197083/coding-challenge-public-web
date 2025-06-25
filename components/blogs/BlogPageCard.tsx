import React from 'react'

type BlogPageCardProps = {
    imageUrl: string;
    title: string;
    author: string;
    publishedDate: string;
}

const BlogPageCard = ({ imageUrl, title, author, publishedDate }: BlogPageCardProps) => {
    return (
        <article className="grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-sm border border-slate-100 overflow-hidden" aria-labelledby="blog-title">
            <div className="col-span-1">
                <img
                    src={imageUrl}
                    alt={`Featured image for article: ${title}`}
                    className="w-full h-[300px] md:h-[360px] object-cover transition-transform hover:scale-105 duration-300"
                />
            </div>
            <div className="col-span-1 p-12 flex flex-col space-y-6 bg-zinc-900 text-white/90">
                <h1 id="blog-title" className="text-4xl font-bold">{title}</h1>
                <div className="flex gap-4">
                    <p className="text-sm text-zinc-300" aria-label="Author">
                        By {author}
                    </p>
                    <time
                        dateTime={new Date(publishedDate).toISOString()}
                        className="text-sm text-zinc-300"
                        aria-label="Publication date"
                    >
                        {publishedDate}
                    </time>
                </div>
            </div>
        </article>
    )
}

export default BlogPageCard
