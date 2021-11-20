import { imageBuilder } from "../lib/sanity";
import Link from "next/link";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Favorites({ posts, title }) {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto px-12 sm:px-6 lg:px-8'>
        <div className='mx-auto py-12 lg:py-20 lg:max-w-none'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
          <div className='space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-12'>
            {posts.slice(0, 3).map((post) => (
              <>
                <div className='min-h-24 bg-transparent py-6 flex flex-col justify-center sm:py-12 group'>
                  <div className='relative md:w-11/12 md:mx-auto sm:mx-auto'>
                    <div className='absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-3 transition ease-in-out duration-300 sm:skew-y-0 sm:-rotate-3 rounded-3xl group-hover:rotate-0 group-hover:shadow-2xl'></div>
                    <div className='relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl p-6 transform hover:-translate-y-1'>
                      <Link as={`/posts/${post.slug}`} href='/posts/[slug]'>
                        <div key={post.title}>
                          <img
                            src={imageBuilder(post.coverImage)
                              .width(1240)
                              .height(540)
                              .url()}
                            alt={post.title}
                            className='w-full object-center object-cover rounded-md'
                          />
                          <div className='py-4'>
                            <div className='font-bold text-xl mb-2'>
                              {post.title}
                            </div>
                            <p className='text-gray-700 text-base'>
                              {post.excerpt}
                            </p>
                          </div>
                          <div className='pt-4 pb-2'>
                            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                              #photography
                            </span>
                            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                              #travel
                            </span>
                            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                              #winter
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className='grid w-1/5 items-center mt-12'>
            <div className='inline-flex justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>
              Browse More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
