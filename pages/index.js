import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import Features from "../components/features";
import CTA from "../components/CTA";
import Promo from "../components/promo";
import Favorites from "../components/favorites";
import Testimonials from "../components/testimonials";
import Pricing from "../components/pricing";
import Banner from "../components/banner";
import HeaderSlim from "../components/headerSlim";
import Ticker from "../components/ticker";

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Liza's Lil Pies and More</title>
        </Head>
        <Container>
          <Banner />
          <HeaderSlim />
          <Intro />
          <Ticker />
          <Features />
          <Favorites posts={allPosts} title='New Arrivals' />
          {/* <Testimonials /> */}
          <Pricing />
          <Promo />
          <CTA />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
