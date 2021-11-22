/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return <div />;
  }

  return (
    <motion.div>
      <div className='bg-rose-gold-300 w-full z-50 shadow-md'>
        <div className='max-w-full mx-auto py-3 px-3 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between flex-wrap'>
            <div className='w-0 flex-1 flex items-center'>
              <span className='flex p-2 rounded-lg bg-rose-gold-500'>
                <SpeakerphoneIcon
                  className='h-6 w-6 text-white'
                  aria-hidden='true'
                />
              </span>
              <p className='ml-3 font-medium text-white truncate'>
                <span className='md:hidden'>Place orders online!</span>
                <span className='hidden md:inline'>
                  Big news! We're now accepting online orders.
                </span>
              </p>
            </div>
            <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
              <a
                href='#'
                className='flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-rose-gold-500 hover:bg-rose-gold-purple'>
                Place An Order
              </a>
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                onClick={() => setIsOpen(false)}
                type='button'
                className='-mr-1 flex p-2 rounded-md hover:bg-rose-gold-purple focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'>
                <span className='sr-only'>Dismiss</span>
                <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
