import React from 'react'

type BlogPageCardProps = {
    imageUrl: string;
    title: string;
    author: string;
    publishedDate: string;
}

const BlogPageCard = ({ imageUrl, title, author, publishedDate }: BlogPageCardProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="col-span-1">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-[300px] md:h-[360px] object-cover transition-transform hover:scale-105 duration-300"
                />
            </div>
            <div className="col-span-1 p-12 flex flex-col space-y-6 bg-zinc-900 text-white/90">
                <h1 className="text-4xl font-bold">{title}</h1>
                <div className="flex gap-4">
                    <p className="text-sm text-zinc-300">
                        By {author}
                    </p>
                    <p className="text-sm text-zinc-300">
                        {publishedDate}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogPageCard
