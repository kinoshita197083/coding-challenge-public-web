import { Document as RichTextDocument } from '@contentful/rich-text-types';

export type ContentfulAsset = {
    sys: {
        id: string;
    };
    fields: {
        title: string;
        description?: string;
        file: {
            url: string;
            details: {
                size: number;
                image?: {
                    width: number;
                    height: number;
                };
            };
            fileName: string;
            contentType: string;
        };
    };
};

export type BlogPost = {
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
    };
    fields: {
        title: string;
        slug: string;
        readTime?: number;
        author?: string;
        publishedDate: string;
        featuredImage?: ContentfulAsset;
        excerpt?: RichTextDocument;
        content: RichTextDocument;
        tags?: string[];
    };
}

// Helper type for easier consumption in components
export type ProcessedBlogPost = {
    id: string;
    title: string;
    slug: string;
    readTime: number;
    author?: string;
    publishedDate: string;
    featuredImage?: {
        url: string;
        title?: string;
        description?: string;
        width?: number;
        height?: number;
    };
    excerpt?: RichTextDocument;
    content: RichTextDocument;
    tags?: string[];
    createdAt: string;
    updatedAt: string;
}