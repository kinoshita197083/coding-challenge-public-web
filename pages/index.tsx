import Layout from "../components/layout/layout";
import BlogList from "../components/blogs/BlogList";
import { CONTENTFUL_CONTENT_TYPE, getContentfulClient } from "../lib/utils";

export default function Home({ entries }) {
  return (
    <Layout>
      <BlogList entries={entries} />
    </Layout>
  );
}

export async function getStaticProps() {
  const contentfulClient = getContentfulClient();
  const res = await contentfulClient.getEntries({ content_type: CONTENTFUL_CONTENT_TYPE });

  return {
    props: {
      entries: res.items,
    },
  };
}
