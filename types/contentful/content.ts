export type ContentfulEntries = {
    entries: [Entries]
}

// This is the type for a single entry in the Contentful API
export type Entries = {
    sys: {
        id: string;
    }
    fields: {
        title: string;
        slug: string;
        content: string;
        author: string;
        publishedDate: string;
        tags: string[];
        featuredImage: any;
    }
}