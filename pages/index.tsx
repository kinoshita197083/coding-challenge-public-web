import BlogList from "../components/blogs/BlogList";
import { CONTENTFUL_INDEX_PAGE, CONTENTFUL_BLOG_POSTS, getContentfulClient } from "../lib/utils";
import CallToActionCard from "@/components/callToAction/CallToActionCard";
import LandingSection from "@/components/home/LandingSection";
import { BlogPost } from "@/types/blogs/blog";
import { LandingSectionProps, SubscribeCallToActionProps } from "@/types/contentful/content";

type IndexPageData = {
  fields: {
    landingSection: LandingSectionProps;
    subscribeCallToAction: SubscribeCallToActionProps;
  };
}

export default function Home({ allBlogs, indexPage }: { allBlogs: BlogPost[], indexPage: IndexPageData[] }) {
  const { landingSection, subscribeCallToAction } = indexPage?.[0]?.fields || {};
  // console.log('------> subscribeCallToAction:', subscribeCallToAction);
  // console.log('------> landingSection:', landingSection);

  console.log('------> allBlogs:', allBlogs);

  return (
    <div className="space-y-16">
      <LandingSection {...landingSection} />
      <BlogList blogs={allBlogs} />
      <CallToActionCard {...subscribeCallToAction} />
    </div>
  );
}

export async function getStaticProps() {
  const contentfulClient = getContentfulClient();
  const allBlogs = contentfulClient.getEntries({ content_type: CONTENTFUL_BLOG_POSTS }); // Get all blog posts Promise
  const indexPage = contentfulClient.getEntries({ content_type: CONTENTFUL_INDEX_PAGE }); // Get the UI elements for the index page Promise

  try {
    const [allBlogsData, indexPageData] = await Promise.all([allBlogs, indexPage]);
    // console.log('------> allBlogsData:', allBlogsData.items);
    // console.log('------> indexPageData:', indexPageData.items);
    return {
      props: {
        allBlogs: allBlogsData.items,
        indexPage: indexPageData.items,
      },
    };
  } catch (error) {
    console.error('Error fetching contentful data:', error);
    return {
      props: { allBlogs: [], indexPage: [] },
    };
  }
}
