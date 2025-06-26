import { getStaticProps } from '../../pages/index';
import * as utils from '../../lib/utils';

jest.mock('../../lib/utils', () => ({
    getContentfulClient: jest.fn(),
    CONTENTFUL_BLOG_POSTS: 'blogPost',
    CONTENTFUL_INDEX_PAGE: 'blogsPage'
}));

describe('index page getStaticProps', () => {
    const mockGetEntries = jest.fn();
    const mockContentfulClient = { getEntries: mockGetEntries };

    beforeEach(() => {
        jest.clearAllMocks();
        (utils.getContentfulClient as jest.Mock).mockReturnValue(mockContentfulClient);
    });

    test('should return blog posts and index page data on successful API call', async () => {
        // Mock the response from Contentful
        const mockBlogData = {
            items: [
                {
                    sys: { id: '1', createdAt: '2023-01-01', updatedAt: '2023-01-02' },
                    fields: {
                        title: 'Test Blog',
                        slug: 'test-blog',
                        readTime: 5,
                        publishedDate: '2023-01-01',
                        content: { nodeType: 'document', data: {}, content: [] }
                    }
                }
            ]
        };

        const mockIndexData = {
            items: [
                {
                    fields: {
                        landingSection: {
                            badge: { text: 'New', styling: { shadow: 'lg' } },
                            layout: { spacing: 'md', description: 'Test', alignment: 'center', backgroundColor: 'white', backgroundType: 'solid' },
                            buttons: [],
                            heading: { text: 'Welcome', tag: 'h1', styling: { color: 'black', fontSize: 'lg', fontWeight: 'bold', textAlign: 'center' } },
                            subHeadings: []
                        },
                        subscribeCallToAction: {
                            layout: { spacing: 'md', description: 'Subscribe', alignment: 'center', backgroundColor: 'white', backgroundType: 'solid' },
                            buttons: [],
                            heading: { text: 'Subscribe', tag: 'h2', styling: { color: 'black', fontSize: 'md', fontWeight: 'bold', textAlign: 'center' } },
                            subHeadings: [],
                            featuredImage: { alt: 'Subscribe', src: '/images/subscribe.jpg' }
                        }
                    }
                }
            ]
        };

        // Set up the mocks to resolve with our test data
        mockGetEntries.mockImplementation((query) => {
            if (query.content_type === utils.CONTENTFUL_BLOG_POSTS) {
                return Promise.resolve(mockBlogData);
            }
            if (query.content_type === utils.CONTENTFUL_INDEX_PAGE) {
                return Promise.resolve(mockIndexData);
            }
            return Promise.resolve({ items: [] });
        });

        // Call getStaticProps
        const result = await getStaticProps();

        // Verify the results
        expect(mockGetEntries).toHaveBeenCalledTimes(2);
        expect(mockGetEntries).toHaveBeenCalledWith({ content_type: utils.CONTENTFUL_BLOG_POSTS });
        expect(mockGetEntries).toHaveBeenCalledWith({ content_type: utils.CONTENTFUL_INDEX_PAGE });

        expect(result).toEqual({
            props: {
                allBlogs: mockBlogData.items,
                indexPage: mockIndexData.items,
            },
        });
    });

    test('should handle errors and return empty arrays', async () => {
        // Mock the API to throw an error
        mockGetEntries.mockRejectedValue(new Error('API error'));

        // Call getStaticProps
        const result = await getStaticProps();

        // Verify error handling
        expect(result).toEqual({
            props: {
                allBlogs: [],
                indexPage: [],
            },
        });
    });
}); 