import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <Head>
                <title>Next.js + Contentful Starter</title>
            </Head>
            {children}
        </div>
    );
}