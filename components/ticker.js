import React from "react";
import Marquee from "react-fast-marquee";

function Ticker() {
  return (
    <div>
      <Marquee speed={45} gradient={false}>
        <div className='bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24 my-auto'>
          <div className='relative w-11/12 mx-auto'>
            <div className='relative -rotate-2 hover:rotate-0 bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl transform hover:-translate-y-1'>
              <figure class='md:flex rounded-xl p-8 md:p-0 m-4 mx-auto'>
                <img
                  class='md:rounded-bl-xl md:rounded-tl-xl md:rounded-none rounded-xl mx-auto contain max-h-72'
                  src='https://javacupcake.com/wp-content/uploads/2017/02/MagnoliaBakeryNYC-192549-1.jpg.webp'
                  alt=''
                />
                <div class='pt-6 md:p-8 text-center md:text-left space-y-4'>
                  <blockquote>
                    <p class='text-lg font-semibold max-w-sm'>
                      “Tailwind CSS is the only framework that I've seen scale
                      on large teams. It’s easy to customize, adapts to any
                      design, and the build size is tiny.”
                    </p>
                  </blockquote>
                  <figcaption class='font-medium'>
                    <div class='text-blue-300'>Sarah Dayan</div>
                    <div class='text-gray-500'>Staff Engineer, Algolia</div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className='bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24 my-auto'>
          <div className='relative w-11/12 mx-auto'>
            <div className='relative rotate-2 hover:rotate-0 bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl transform hover:-translate-y-1'>
              <figure class='md:flex rounded-xl p-8 md:p-0 m-4 mx-auto'>
                <img
                  class='md:rounded-bl-xl md:rounded-tl-xl md:rounded-none rounded-xl mx-auto md:contain'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <div class='pt-6 md:p-8 text-center md:text-left space-y-4'>
                  <blockquote>
                    <p class='text-lg font-semibold max-w-sm'>
                      “Tailwind CSS is the only framework that I've seen scale
                      on large teams. It’s easy to customize, adapts to any
                      design, and the build size is tiny.”
                    </p>
                  </blockquote>
                  <figcaption class='font-medium'>
                    <div class='text-blue-300'>Sarah Dayan</div>
                    <div class='text-gray-500'>Staff Engineer, Algolia</div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className='bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24 my-auto'>
          <div className='relative w-11/12 mx-auto'>
            <div className='relative -rotate-2 hover:rotate-0 bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl transform hover:-translate-y-1'>
              <figure class='md:flex rounded-xl p-8 md:p-0 m-4 mx-auto'>
                <img
                  class='md:rounded-bl-xl md:rounded-tl-xl md:rounded-none rounded-xl mx-auto md:contain max-h-72'
                  src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2019%2F11%2F07%2FSLSEO_Virginia_Pumpkin_Pie_2_-2000.jpg'
                  alt=''
                />
                <div class='pt-6 md:p-8 text-center md:text-left space-y-4'>
                  <blockquote>
                    <p class='text-lg font-semibold max-w-sm'>
                      “Tailwind CSS is the only framework that I've seen scale
                      on large teams. It’s easy to customize, adapts to any
                      design, and the build size is tiny.”
                    </p>
                  </blockquote>
                  <figcaption class='font-medium'>
                    <div class='text-blue-300'>Sarah Dayan</div>
                    <div class='text-gray-500'>Staff Engineer, Algolia</div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className='bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24 my-auto'>
          <div className='relative w-11/12 mx-auto'>
            <div className='relative rotate-2 hover:rotate-0 bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl transform hover:-translate-y-1'>
              <figure class='md:flex rounded-xl p-8 md:p-0 m-4 mx-auto'>
                <img
                  class='md:rounded-bl-xl md:rounded-tl-xl md:rounded-none rounded-xl mx-auto md:contain max-h-72'
                  src='https://www.thebakingfairy.net/wp-content/uploads/2021/01/unicorn-cake.jpg'
                  alt=''
                />
                <div class='pt-6 md:p-8 text-center md:text-left space-y-4'>
                  <blockquote>
                    <p class='text-lg font-semibold max-w-sm'>
                      “Tailwind CSS is the only framework that I've seen scale
                      on large teams. It’s easy to customize, adapts to any
                      design, and the build size is tiny.”
                    </p>
                  </blockquote>
                  <figcaption class='font-medium'>
                    <div class='text-blue-300'>Sarah Dayan</div>
                    <div class='text-gray-500'>Staff Engineer, Algolia</div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Ticker;
