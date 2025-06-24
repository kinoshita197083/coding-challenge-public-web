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
        date: string;
        tags: string[];
        image: string;
        isFeatured: boolean;
    }
}