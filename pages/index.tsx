import Layout from "./layout";
import App from "./App";
import { CONTENTFUL_CONTENT_TYPE } from "../lib/utils";

export default function Home({ entries }) {
  return (
    <Layout>
      <App entries={entries} />
    </Layout>
  );
}

export async function getStaticProps() {
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: CONTENTFUL_CONTENT_TYPE });

  return {
    props: {
      entries: res.items,
    },
  };
}
