import Layout from "../components/layout/layout";
import App from "../components/layout/App";
import { CONTENTFUL_CONTENT_TYPE, contentfulClient } from "../lib/utils";

export default function Home({ entries }) {
  return (
    <Layout>
      <App entries={entries} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await contentfulClient.getEntries({ content_type: CONTENTFUL_CONTENT_TYPE });


  return {
    props: {
      entries: res.items,
    },
  };
}
