import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Comments from "../../components/comments";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Form from "../../components/form";
import Specs from "../../components/specs";
import Product from "../../components/product";
import Favorites from "../../components/favorites";
import OrderForm from "../../components/orderForm";


export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <div>
            <div className='max-w-6xl mx-auto'>
              <article>
                <Head>
                  <title>{post.title}</title>
                  {/* <meta property="og:image" content={post.ogImage.url} /> */}
                </Head>
                <Product
                  content={post.body}
                  title={post.title}
                  slug={post.slug}
                  imageTwo={post.imageTwo}
                  imageThree={post.imageThree}
                  imageFour={post.imageFour}
                  imageFive={post.imageFive}
                  date={post.date}
                  author={post.author.name}
                  id={post._id}
                />
                {/* <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              /> */}
              </article>
              <Specs
                imageSix={post.imageSix}
                imageSeven={post.imageSeven}
                imageEight={post.imageEight}
                imageNine={post.imageNine}
              />
            </div>
            <div className='w-full mt-20'>
              <Favorites posts={morePosts} title='More Like This' />
            </div>
            <div className='max-w-5xl mx-auto'>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                <Comments comments={post.comments} />
                <div className='lg:w-5/6 m-auto w-full'>
                  <Form _id={post._id} />
                </div>
              </div>

              <SectionSeparator />
              {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
