import React from 'react'
import { Button } from '../ui/button'

const FeaturedBlogPost = ({ featuredEntry }: { featuredEntry: any }) => {
    return (
        <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden rounded-xl shadow-sm border border-slate-100">
                <div className="relative h-64 lg:h-auto bg-slate-50 overflow-hidden">
                    <img
                        src={featuredEntry.fields.featuredImage.fields.file.url}
                        alt={featuredEntry.fields.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />

                </div>

                <div className="flex flex-col justify-center p-6 lg:p-8">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                            <span className="font-semibold text-blue-600 text-sm tracking-wide">FEATURED</span>
                        </div>

                        {featuredEntry.fields.tags && featuredEntry.fields.tags.length > 0 && (
                            <span className="inline-flex py-1 px-3 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                {featuredEntry.fields.tags[0]}
                            </span>
                        )}
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                        {featuredEntry.fields.title}
                    </h2>

                    <p className="text-base text-slate-600 mb-6">
                        {/* {featuredEntry.fields.content &&
                                    `${featuredEntry.fields.content.substring(0, 160)}${featuredEntry.fields.content.length > 160 ? '...' : ''}`
                                } */}
                    </p>

                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">{featuredEntry.fields.author}</p>
                            <div className="flex text-sm text-slate-500">
                                <span>{new Date(featuredEntry.fields.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                <span className="mx-2">•</span>
                                <span>{featuredEntry.fields.readTime} min read</span>
                            </div>
                        </div>
                    </div>

                    <Button
                        variant="default"
                        className="bg-zinc-800 hover:bg-zinc-700 text-white w-fit transition-all duration-200 group"
                        onClick={() => window.location.href = `/blog/${featuredEntry.fields.slug}`}
                    >
                        Read Full Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlogPost
