import { imageBuilder } from '../lib/sanity';
import Link from 'next/link';

export default function Favorites({ posts, title }) {
  return (
    <div className="bg-rose-gold-50 py-6 md:py-0 px-4">
      <div className="max-w-7xl mx-auto md:px-12 sm:px-2 lg:px-8">
        <div className="mx-auto py-12 lg:py-20 lg:max-w-none">
          <h2 className="pb-8 text-center title--secondary text-maroon">
            {title}
          </h2>
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-12">
            {posts.slice(0, 4).map((post) => (
              <>
                <div
                  key={post._id}
                  className="min-h-24 bg-transparent flex flex-col justify-center sm:py-8 group">
                  <div className="relative w-full mx-auto">
                    <div className="relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 transform hover:-translate-y-1">
                      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                        <div>
                          <img
                            src={imageBuilder(post.images.coverImage)
                              .width(1240)
                              .height(540)
                              .url()}
                            alt={post.title}
                            className="w-full object-center object-cover h-96 "
                          />
                          <div className="py-4 px-4 favorites-card--title border-solid border-maroon border--1">
                            <div className="text-lg text-maroon text-center">
                              {post.title}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="grid place-items-center mt-12">
            <div className="text-center px-5 py-3 w-11/12 lg:w-1/6 button--1 md:py-4 md:text-lg md:px-10">
              Browse More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
