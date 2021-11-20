import React from "react";
import Marquee from "react-fast-marquee";

function Ticker() {
  return (
    <div>
      <Marquee speed={25} pauseOnHover={false}>
        <div className='min-h-24 bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24'>
          <div className='relative w-11/12 mx-auto'>
            <div className='absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-3 transition ease-in-out duration-300 sm:skew-y-0 sm:-rotate-3 rounded-3xl group-hover:rotate-0 group-hover:shadow-2xl'></div>
            <div className='relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl p-6 transform hover:-translate-y-1'>
              <div className='w-36 h-36'></div>
            </div>
          </div>
        </div>
        <div className='min-h-24 bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24'>
          <div className='relative w-11/12 mx-auto'>
            <div className='absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-3 transition ease-in-out duration-300 sm:skew-y-0 sm:-rotate-3 rounded-3xl group-hover:rotate-0 group-hover:shadow-2xl'></div>
            <div className='relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl p-6 transform hover:-translate-y-1'>
              <div className='w-36 h-36'></div>
            </div>
          </div>
        </div>
        <div className='min-h-24 bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24'>
          <div className='relative w-11/12 mx-auto'>
            <div className='absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-3 transition ease-in-out duration-300 sm:skew-y-0 sm:-rotate-3 rounded-3xl group-hover:rotate-0 group-hover:shadow-2xl'></div>
            <div className='relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl p-6 transform hover:-translate-y-1'>
              <div className='w-36 h-36'></div>
            </div>
          </div>
        </div>
        <div className='min-h-24 bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24'>
          <div className='relative w-11/12 mx-auto'>
            <div className='absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-3 transition ease-in-out duration-300 sm:skew-y-0 sm:-rotate-3 rounded-3xl group-hover:rotate-0 group-hover:shadow-2xl'></div>
            <div className='relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl p-6 transform hover:-translate-y-1'>
              <div className='w-36 h-36'></div>
            </div>
          </div>
        </div>
        <div className='min-h-24 bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24'>
          <div className='relative w-11/12 mx-auto'>
            <div className='absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-3 transition ease-in-out duration-300 sm:skew-y-0 sm:-rotate-3 rounded-3xl group-hover:rotate-0 group-hover:shadow-2xl'></div>
            <div className='relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl p-6 transform hover:-translate-y-1'>
              <div className='w-36 h-36'></div>
            </div>
          </div>
        </div>
        <div className='min-h-24 bg-transparent py-6 flex flex-col justify-center sm:py-12 group ml-24'>
          <div className='relative w-11/12 mx-auto'>
            <div className='absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-3 transition ease-in-out duration-300 sm:skew-y-0 sm:-rotate-3 rounded-3xl group-hover:rotate-0 group-hover:shadow-2xl'></div>
            <div className='relative bg-white shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out duration-300 rounded-3xl p-6 transform hover:-translate-y-1'>
              <div className='w-36 h-36'></div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Ticker;
