export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    content: string;
    author: string;
    date: string;
    tags: string[];
    image: string;
    isFeatured: boolean;
}