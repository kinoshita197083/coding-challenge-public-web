import BlogList from "@/components/blogs/BlogList";
import { BlogPost } from "@/types/blogs/blog";
import { render, screen } from "@testing-library/react";

const mockBlogs = [
    {
        sys: {
            id: '123',
            createdAt: '2025-06-23T07:58:25.307Z',
            updatedAt: '2025-06-23T07:58:25.307Z',
        },
        fields: {
            title: 'Venture Blog',
            slug: 'venture-blog',
            readTime: 5,
            author: 'Team Zeller',
            publishedDate: '2025-06-23T17:57+10:00',
            featuredImage: {
                fields: {
                    file: {
                        url: 'https://example.com/test-image.jpg',
                    },
                },
            },
            tags: ['venture', 'blog'],
        }
    },
    {
        sys: {
            id: '123',
            createdAt: '2025-06-23T07:58:25.307Z',
            updatedAt: '2025-06-23T07:58:25.307Z',
        },
        fields: {
            title: 'Startup Blog',
            slug: 'startup-blog',
            readTime: 5,
            author: 'Team Zeller',
            publishedDate: '2025-06-23T17:57+10:00',
            featuredImage: {
                fields: {
                    file: {
                        url: 'https://example.com/test-image.jpg',
                    },
                },
            },
            tags: ['startup', 'blog'],
        }
    }
];

describe('BlogList Component', () => {

    test('renders the blog list', () => {
        render(<BlogList blogs={mockBlogs as BlogPost[]} />);

        // Check if the blog list has the correct number of blogs
        // The first blog is the featured blog, so we need to subtract 1
        expect(screen.getAllByRole('listitem')).toHaveLength(mockBlogs.length - 1);
    });

    test('renders the featured blog post', () => {
        render(<BlogList blogs={mockBlogs as BlogPost[]} />);

        // Check if the featured blog post is rendered
        expect(screen.getByText('Venture Blog')).toBeInTheDocument();
    });
});