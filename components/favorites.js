import { imageBuilder } from "../lib/sanity";
import Link from "next/link";

export default function Favorites({ posts, title }) {
  return (
    <div className='bg-rose-gold-50 py-6 md:py-0 px-4'>
      <div className=' max-w-7xl mx-auto md:px-12 sm:px-2 lg:px-8'>
        <div className='mx-auto py-12 lg:py-20 lg:max-w-none'>
          <h2 className='pb-8 md:pb-0 text-center tracking-tight text-rose-gold-900 cormorant-sub'>
            {title}
          </h2>
          <div className='space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-12'>
            {posts.slice(0, 4).map((post) => (
              <>
                <div key={post._id} className='min-h-24 bg-transparent flex flex-col justify-center sm:py-8 group'>
                  <div className='relative w-11/12 mx-auto'>
                    <div className='absolute inset-0 bg-gradient-to-r from-gold-darker to-gold-lighter shadow-lg transform -skew-y-2 transition ease-in-out duration-300 sm:skew-y-0 sm:-rotate-2 rounded-3xl group-hover:rotate-0 group-hover:shadow-xl'></div>
                    <div className='relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl p-6 transform hover:-translate-y-1'>
                      <Link as={`/posts/${post.slug}`} href='/posts/[slug]'>
                        <div>
                          <img
                            src={imageBuilder(post.coverImage)
                              .width(1240)
                              .height(540)
                              .url()}
                            alt={post.title}
                            className='w-full object-center object-cover h-48 rounded-md'
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
          <div className='grid place-items-center mt-12'>
            <div className='text-center px-5 py-3 w-11/12 lg:w-1/6 border border-transparent text-base font-medium rounded-md text-white bg-rose-gold-300 hover:bg-rose-gold-500'>
              Browse More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
