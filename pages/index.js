import Head from "next/head";

export default function Home({ entries }) {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Head>
        <title>Next.js + Contentful Starter</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Zeller Blogs</h1>
      <ul className="space-y-2">
        {entries.map((entry) => (
          <li key={entry.sys.id} className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-semibold">{entry.fields.title}</h2>
            <p>{entry.fields.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "yourContentTypeId" });

  return {
    props: {
      entries: res.items,
    },
  };
}
