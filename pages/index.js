import Container from "../components/container";
import Hero from "../components/hero";
import Layout from "../components/layout";
import { getAllPostsForHome, getLandingPageContent } from "../lib/api";
import Head from "next/head";
import Features from "../components/features";
import CTA from "../components/CTA";
import Promo from "../components/promo";
import Favorites from "../components/favorites";
import Pricing from "../components/pricing";
import Banner from "../components/banner";
import HeaderSlim from "../components/headerSlim";
import Ticker from "../components/ticker";
import HeroTwo from "../components/heroTwo";

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Liza's Lil Pies and More</title>
        </Head>
        <header className='sticky top-0 z-50'>
          <Banner />
        </header>
        <Container>
          <HeaderSlim />
          <Hero />
          <Ticker />
          <Features />
          <Promo />
          <Favorites posts={allPosts} title='New Treats' />
          {/* <Testimonials /> */}
          <Pricing />
          <CTA />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const landingPageContent = await getLandingPageContent(preview);
  console.log(landingPageContent)
  return {
    props: { allPosts, landingPageContent, preview },
    revalidate: 1,
  };
}
