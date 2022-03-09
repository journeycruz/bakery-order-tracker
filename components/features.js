import { imageBuilder } from '../lib/sanity';

export default function Features({ post }) {
  const favorite = post[0].favorites[0];
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
                className='w-full object-center object-cover h-96'
              />
              <div className="py-4 px-4 favorites-card--title border-solid border-maroon border--1">
                <div className="text-lg text-maroon text-center">
                  {favorite.title}
                </div>
              </div>
            </div>
            <div className="grid-flow-col">
              <p>{favorite.body[0].children[0].text}</p>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
