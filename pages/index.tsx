import BlogList from "../components/blogs/BlogList";
import { CONTENTFUL_CONTENT_TYPE, getContentfulClient } from "../lib/utils";
import CallToActionCard from "@/components/callToAction/CallToActionCard";

export default function Home({ entries }) {
  return (
    <div className="space-y-16">
      <BlogList entries={entries} />
      <CallToActionCard />
    </div>
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
