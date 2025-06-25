import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogItem from '@/components/blogs/Blog';
import { BlogPost } from '@/types/blogs/blog';
import { BLOCKS } from '@contentful/rich-text-types';

// Mock Next.js Link component
jest.mock('next/link', () => {
    return ({ children, href }: { children: React.ReactNode; href: string }) => {
        return (
            <a href={href} data-testid="link">
                {children}
            </a>
        );
    };
});

describe('BlogItem', () => {
    // Mock blog post data
    const mockBlogPost: BlogPost = {
        sys: {
            id: 'blog-1',
            createdAt: '2025-06-25T00:00:00.000Z',
            updatedAt: '2025-06-25T00:00:00.000Z',
        },
        fields: {
            title: 'Test Blog Title',
            slug: 'test-blog-slug',
            readTime: 5,
            author: 'Test Author',
            publishedDate: '2025-06-25T00:00:00.000Z',
            featuredImage: {
                sys: {
                    id: 'image-1',
                },
                fields: {
                    title: 'Test Image',
                    file: {
                        url: 'https://example.com/test-image.jpg',
                        details: {
                            size: 12345,
                            image: {
                                width: 1200,
                                height: 800,
                            },
                        },
                        fileName: 'test-image.jpg',
                        contentType: 'image/jpeg',
                    },
                },
            },
            content: {
                nodeType: BLOCKS.DOCUMENT,
                data: {},
                content: [],
            },
            tags: ['tag1', 'tag2'],
        },
    };

    test('renders blog post correctly', () => {
        render(<BlogItem blogPost={mockBlogPost} />);

        // Check if title is rendered
        expect(screen.getByText('Test Blog Title')).toBeInTheDocument();

        // Check if author is rendered
        expect(screen.getByText('By Test Author')).toBeInTheDocument();

        // Check if formatted date is rendered
        expect(screen.getByText('25 June 2025')).toBeInTheDocument();

        // Check if tags are rendered
        expect(screen.getByText('tag1')).toBeInTheDocument();
        expect(screen.getByText('tag2')).toBeInTheDocument();

        // Check if Read More button is rendered
        expect(screen.getByText('Read More')).toBeInTheDocument();

        // Check if the link has the correct href
        const link = screen.getByTestId('link');
        expect(link).toHaveAttribute('href', '/blog/test-blog-slug');

        // Check if the image is rendered with the correct src
        const image = screen.getByAltText('Test Blog Title');
        expect(image).toHaveAttribute('src', 'https://example.com/test-image.jpg');
    });

    test('renders without image when featuredImage is not provided', () => {
        const blogPostWithoutImage = {
            ...mockBlogPost,
            fields: {
                ...mockBlogPost.fields,
                featuredImage: undefined,
            }
        };

        render(<BlogItem blogPost={blogPostWithoutImage} />);

        // Verify the image is not rendered
        expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    test('renders without tags when tags are not provided', () => {
        const blogPostWithoutTags = {
            ...mockBlogPost,
            fields: {
                ...mockBlogPost.fields,
                tags: undefined,
            }
        };

        render(<BlogItem blogPost={blogPostWithoutTags} />);

        // Verify tags are not rendered
        expect(screen.queryByText('tag1')).not.toBeInTheDocument();
        expect(screen.queryByText('tag2')).not.toBeInTheDocument();
    });
}); 