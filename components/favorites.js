import { imageBuilder } from "../lib/sanity";
import Link from "next/link";

export default function Favorites({ posts, title }) {
  return (
    <div className='bg-gray-100 py-6 md:py-0'>
      <div className='max-w-7xl mx-auto md:px-12 sm:px-2 lg:px-8'>
        <div className='mx-auto py-12 lg:py-20 lg:max-w-none'>
          <h2 className='pb-8 md:pb-0 text-3xl text-center lg:text-left font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
          <div className='space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-12'>
            {posts.slice(0, 3).map((post) => (
              <>
                {/* <div className='min-h-24 bg-transparent py-6 flex flex-col justify-center sm:py-12 group'>
                  <div className='relative w-11/12 mx-auto'>
                    <div className='absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 shadow-lg transform -skew-y-2 transition ease-in-out duration-300 sm:skew-y-0 sm:-rotate-1 rounded-xl group-hover:rotate-0 group-hover:shadow-xl'></div>
                    <div className='relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-xl p-6 transform hover:-translate-y-1'>
                      <Link as={`/posts/${post.slug}`} href='/posts/[slug]'>
                        <div key={post.title}>
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
                </div> */}
                <Link as={`/posts/${post.slug}`} href='/posts/[slug]'>
                  <a
                    key={post.title}
                    aria-label='View Item'
                    className='inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2'>
                    <div className='flex flex-col h-full'>
                      <img
                        src={imageBuilder(post.coverImage)
                          .width(1240)
                          .height(540)
                          .url()}
                        className='object-cover w-full h-48'
                        alt={post.title}
                      />
                      <div className='flex-grow border border-t-0 rounded-b'>
                        <div className='p-5'>
                          <h6 className='mb-2 font-semibold leading-5'>
                            {post.title}
                          </h6>
                          <p className='text-sm text-gray-900'>
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </>
            ))}
          </div>
          {/* <div className='grid w-2/5 md:w-1/5 items-center mx-auto mt-12'>
            <div className='text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>
              Browse More
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
