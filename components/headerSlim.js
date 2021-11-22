/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Pricing", href: "#", current: false },
  { name: "Events", href: "#", current: false },
];

const menu = [
  { name: "Pies", href: "#", current: false },
  { name: "Cakes", href: "#", current: false },
  { name: "Cupcakes", href: "#", current: false },
  { name: "Cookies", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderSlim() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-full mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='flex items-center lg:hidden mr-2'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-start sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-start'>
                  {/* <img
                    className='block lg:hidden h-8 ml-2 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                    alt='Liza&#44;s Lil Pies and More'
                  /> */}
                  <div className='text-white my-auto cursive'>
                    Liza's Lil Pies and More
                  </div>
                  {/* <img
                    className='hidden lg:block h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                    alt='Liza&#44;s Lil Pies and More'
                  /> */}
                </div>
                <div className='hidden lg:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    <Menu>
                      <div className='my-auto'>
                        <Menu.Button>
                          <a className='text-gray-300 hover:bg-gray-700 pr-2 px-3 py-2 hover:text-white py-auto rounded-md text-sm font-medium'>
                            Menu <ChevronDownIcon className='h-4 inline-flex' />
                          </a>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'>
                        <Menu.Items
                          className='z-50 max-w-xl w-full mt-14 absolute align-start justify-items-start rounded-md shadow-lg py-1 px-4 bg-white text-left'
                          style={{ marginLeft: "0px" }}>
                          <Menu.Item>
                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                              <div className=''>
                                <a
                                  href='#'
                                  className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                  Hello
                                </a>
                              </div>
                            </div>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='bg-gray-800 flex text-sm rounded-full'>
                      <h1 className='my-auto mx-3 text-gray-400 hover:text-white text-base static hidden lg:block'>
                        Contact
                      </h1>
                      <span className='sr-only'>Open contact menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'>
                    <Menu.Items className='z-40 origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-center'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            <span className='inline-flex'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4 mt-0.5 mr-2'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                                />
                              </svg>
                              Call
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            <span className='inline-flex'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4 mt-0.5 mr-2'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
                                />
                              </svg>
                              Text
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            <span className='inline-flex'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4 mt-0.5 mr-2'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                />
                              </svg>
                              Email
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Menu>
                <div className='my-auto'>
                  <Menu.Button>
                    <a className='text-gray-300 hover:bg-gray-700 pr-2 px-3 py-2 hover:text-white py-auto rounded-md text-sm font-medium'>
                      Menu <ChevronDownIcon className='h-4 inline-flex' />
                    </a>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'>
                  <Menu.Items
                    className='z-50 max-w-md w-full mt-14 absolute align-center justify-items-center rounded-md shadow-lg py-1 px-4 bg-white text-left'
                    style={{ marginLeft: "0px" }}>
                    <Menu.Item>
                      <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                        <div className=''>
                          <a
                            href='#'
                            className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                            Hello
                          </a>
                        </div>
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>

              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
