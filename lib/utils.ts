import { createClient } from "contentful";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const CONTENTFUL_CONTENT_TYPE = "blogPost";

export const getContentfulClient = () => {
    return createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}