import client, { previewClient } from './sanity';

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
_id,
title,
'date': publishedAt,
'excerpt': excerpt,
'slug': slug.current,
'images': {
  'coverImage': mainImage,
  'imageTwo': imageTwo,
  'imageThree': imageThree,
  'imageFour': imageFour,
  'imageFive': imageFive,
  'imageSix': imageSix,
  'imageSeven': imageSeven,
  'imageEight': imageEight,
  'imageNine': imageNine,
},
'categories': categories[] -> {
    title,
  },
'author': author->{name, 'picture': image.asset->url},
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getPostsForFavorites(preview) {
  const results = await getClient(preview).fetch(`*[_type == "post"] | order(publishedAt desc, _updatedAt desc){        
  'favorites': *[ 
    favorite == true] {
      title,
      'body': body,
      'images': {
        'coverImage': mainImage,
      },
    }
}`);
  return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(publishedAt desc, _updatedAt desc) {
        ${postFields}
        body,
        excerpt,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt,
          rating
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...3]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}
