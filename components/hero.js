/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Logo from './logo';

export default function Hero() {
  return (
    <div className="relative bg-pink-100 overflow-hidden">
      <img
        src="https://i.ibb.co/4tyKTJV/mintttttt-ccexpress.png"
        className="h-1/3 xl:h-1/2 2xl:h-4/5 absolute transform rotate-6 -translate-x-16 translate-y-72 xl:translate-y-72 2xl:translate-y-32 hidden xl:block"
        alt=""
      />
      <div className="max-w-7xl mx-auto pt-12">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20s max-w-lg sm:mx-auto lg:mx-0 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32">
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-start sm:h-10"
                aria-label="Global">
                <div className="flex w-24 items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto"></div>
                </div>
                <div className="block ml-4 space-x-8"></div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1"></div>
                  {/* <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a> */}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center">
              <h1 className="text-4xl tracking-loose mt-16">
                <span className="block title text-maroon">
                  Homemade cupcakes
                </span>
                <span className="block mt-3 title text-maroon">
                  {' '}
                  cakes & treats
                </span>
              </h1>
              <p className="my-10 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-lg sm:mx-auto md:mt-5 md:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Link href="/menu" as="/menu">
                    <a className="button--1 w-full md:py-4 md:text-lg md:px-10">
                      Make a choice
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3 xl:w-2/5 bg-pink-100 ">
        <img
          className="w-auto h-auto sm:mx-auto lg:mx-0 transform lg:translate-y-44 2xl:translate-y-20 z-50 -translate-x-4"
          src="https://i.ibb.co/wRCnttG/saf.png"
        />
      </div>
    </div>
  );
}
