// Blog Item Component
// This component is used to display a single blog post in the blog list / blog page

type BlogItemProps = {
    blogPost: {
        id: string;
        title: string;
        slug: string;
        content: string;
        author: string;
        date: string;
        tags: string[];
        image: string;
        isFeatured: boolean;
    };
};

export default function BlogItem({ blogPost }: BlogItemProps) {
    // console.log(blogPost);
    return (
        <div>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.slug}</p>
            <p>{blogPost.author}</p>
            {/* <p>{blogPost.content}</p>
            <p>{blogPost.date}</p>
            <p>{blogPost.tags.join(", ")}</p>
            <p>{blogPost.image}</p>
            <p>{blogPost.isFeatured ? "Yes" : "No"}</p> */}
        </div>
    );
}