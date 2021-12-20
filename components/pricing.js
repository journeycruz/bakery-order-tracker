export default function Pricing() {
  return (
    <div className='py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-20 bg-rose-gold-50'>
      <div className='max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight cormorant-sub text-rose-gold-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <span className='relative'>Pricing</span>
          </span>
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className='grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto'>
        <div className='flex flex-col justify-between p-8 transition-shadow duration-300 bg-white rounded-3xl shadow-sm sm:items-center hover:shadow'>
          <div className='text-center'>
            <div className='text-lg font-semibold'>Individual</div>
            <div className='flex items-center justify-center my-6'>
              <div className='mr-1 text-xl font-semibold'>Starting at $30</div>
              <div className='text-black'>/ dozen</div>
            </div>
            <div className='mt-2 space-y-3'>
              <div className='text-gray-700'>10 deploys per day</div>
              <div className='text-gray-700'>10 GB of storage</div>
              <div className='text-gray-700'>20 domains</div>
            </div>
          </div>
          <div>
            <a
              href='/'
              className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-rose-gold-700 rounded-3xl shadow-md hover:bg-rose-gold-900 focus:shadow-outline focus:outline-none'>
              Place Order
            </a>
            <p className='max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto'>
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
        <div className='relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-3xl shadow-sm sm:items-center hover:shadow border-gold-lighter'>
          <div className='absolute inset-x-0 top-0 flex justify-center -mt-3'>
            <div className='inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded-3xl bg-gold'>
              Most Popular
            </div>
          </div>
          <div className='text-center'>
            <div className='text-lg font-semibold'>Party</div>
            <div className='flex items-center justify-center my-6'>
              <div className='mr-1 text-xl font-semibold'>Starting at $120</div>
            </div>
            <div className='mt-2 space-y-3'>
              <div className='text-gray-700'>200 deploys per day</div>
              <div className='text-gray-700'>80 GB of storage</div>
              <div className='text-gray-700'>Global CDN</div>
            </div>
          </div>
          <div>
            <a
              href='/'
              className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-gold-lighter hover:bg-rose-gold-purple focus:shadow-outline focus:outline-none'>
              Schedule today
            </a>
            <p className='max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto'>
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between p-8 transition-shadow duration-300 bg-white rounded-3xl shadow-sm sm:items-center hover:shadow'>
          <div className='text-center'>
            <div className='text-lg font-semibold'>Catering</div>
            <div className='flex items-center justify-center my-6'>
              <div className='mr-1 text-xl font-semibold'>Custom</div>
            </div>
            <div className='mt-2 space-y-3'>
              <div className='text-gray-700'>500 GB of storage</div>
              <div className='text-gray-700'>Unlimited domains</div>
              <div className='text-gray-700'>24/7 Support</div>
            </div>
          </div>
          <div>
            <a
              href='/'
              className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-rose-gold-700 rounded-3xl shadow-md hover:bg-rose-gold-900 focus:shadow-outline focus:outline-none'>
              Request Quote
            </a>
            <p className='max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto'>
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
