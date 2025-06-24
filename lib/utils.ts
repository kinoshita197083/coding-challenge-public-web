import { createClient } from "contentful";

export const CONTENTFUL_CONTENT_TYPE = "blogPost";

export const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});