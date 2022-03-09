import { imageBuilder } from '../lib/sanity';

export default function Features({ post }) {
  const favorite = post[0].favorites[0];
  console.log(favorite.body[0].children[0].text);
  return (
    <>
      {favorite ? (
        <div className="bg-rose-gold-50 md:py-0 px-4 py-12 lg:py-20 max-w-7xl mx-auto md:px-12 sm:px-2 lg:px-8">
          <h2 className="py-16 text-left title--secondary text-maroon-300">
            Today's Recommendation
          </h2>
          <section className="lg:grid space-y-12 lg:space-y-0 lg:grid-cols-2 gap-x-12">
            <div className="grid-flow-col">
              <img
                src={imageBuilder(favorite.images.coverImage)
                  .width(1240)
                  .height(540)
                  .url()}
                alt=""
                className="w-full object-center object-cover h-96"
              />
              <div className="py-4 px-4 favorites-card--title border-solid border-maroon border--1">
                <div className="text-lg text-maroon text-center">
                  {favorite.title}
                </div>
              </div>
            </div>
            <div className="grid-flow-col">
              <dl class="text-xs font-medium flex items-center row-start-2 sm:row-start-3 lg:row-start-2">
                <dt class="sr-only">Reviews</dt>
                <dd class="text-maroon flex items-center dark:text-indigo-400">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    aria-hidden="true"
                    class="mr-1 stroke-current dark:stroke-indigo-500">
                    <path
                      d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>
                    4.89 <span class="text-slate-400 font-normal">(128)</span>
                  </span>
                </dd>
                <dt class="sr-only">Location</dt>
                <dd class="flex items-center">
                  <svg
                    width="2"
                    height="2"
                    aria-hidden="true"
                    fill="currentColor"
                    class="mx-3 text-slate-300">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1 text-slate-400 dark:text-slate-500"
                    aria-hidden="true">
                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                  San Antonio, Texas
                </dd>
              </dl>
              <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                <button
                  type="button"
                  class="bg-maroon-300 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                  Check availability
                </button>
              </div>

              <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                {favorite.body[0].children[0].text}
              </p>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
