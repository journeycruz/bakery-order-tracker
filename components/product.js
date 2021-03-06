import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import PostBody from "../components/post-body";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import { format, distanceInWords, differenceInDays } from "date-fns";
import OrderForm from "./orderForm";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Menu", href: "/menu" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product({
  content,
  title,
  slug,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  date,
  author,
  _id,
}) {
  return (
    <div className='bg-white'>
      <div className='pt-6'>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className='max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-5xl lg:px-8'>
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className='flex items-center'>
                  <Link href={breadcrumb.href} as={breadcrumb.href}>
                    <a className='mr-2 text-sm font-medium text-gray-900'>
                      {breadcrumb.name}
                    </a>
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox='0 0 16 20'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    className='w-4 h-5 text-gray-300'>
                    <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                  </svg>
                </div>
              </li>
            ))}
            <li className='text-sm'>
              <Link
                as={`/posts/${slug}`}
                href='/posts/[slug]'
                aria-current='page'
                className='font-medium text-gray-500
                hover:text-gray-600'>
                {title}
              </Link>
            </li>
          </ol>
        </nav>
        {/* Image gallery */}
        <div className='max-w-2xl mx-auto pt-6 px-4 lg:grid-rows-[auto,auto,1fr] sm:px-6 lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
          <div className='lg:col-span-3 pb-6'>
            <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {title}
            </h1>
            <h1 className='text-base font-normal tracking-tight text-gray-400 pt-2'>
              {differenceInDays(new Date(date), new Date()) > 3
                ? distanceInWords(new Date(date), new Date())
                : format(new Date(date), "MMMM dd, yyyy")}{" "}
              &bull; {author}
            </h1>
          </div>
          <div className='hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block'>
            <img
              src={imageBuilder(imageTwo).width(2480).height(1700).url()}
              alt={product.images[0].alt}
              className='w-full h-full object-center object-cover'
            />
          </div>
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
              <img
                src={imageBuilder(imageThree).width(2480).height(1700).url()}
                alt={product.images[1].alt}
                className='w-full h-full object-center object-cover'
              />
            </div>
            <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
              <img
                src={imageBuilder(imageFour).width(2480).height(1700).url()}
                alt={product.images[2].alt}
                className='w-full h-full object-center object-cover'
              />
            </div>
          </div>
          <div className='aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4'>
            <img
              src={imageBuilder(imageFive).width(1240).height(1700).url()}
              alt={product.images[3].alt}
              className='w-full h-full object-center object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Product info */}
        <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-6xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
          <div className='pt-10 lg:pt-6 lg:col-start-1 lg:col-span-1 lg:pr-8'>
            {/* Description and details */}
            <div>
              <h3 className='sr-only'>Description</h3>
              <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                Description
              </h1>
              <div className='space-y-6'>
                <p className='text-base text-gray-900'>
                  <PostBody content={content} />
                </p>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

              <div className='mt-4'>
                <ul role='list' className='pl-4 list-disc text-sm space-y-2'>
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className='text-gray-400'>
                      <span className='text-gray-600'>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className='grid grid-cols-2 gap-x-8 mt-10 justify-between'>
              <img
                src={imageBuilder(imageFive).width(1240).height(820).url()}
                alt={product.images[3].alt}
                className='w-full h-full object-center object-cover rounded-lg'
              />
              <img
                src={imageBuilder(imageFive).width(1240).height(820).url()}
                alt={product.images[3].alt}
                className='w-full h-full object-center object-cover rounded-lg'
              />
            </div> */}
          </div>
          <div className='lg:col-span-1'>
            <OrderForm id={_id} />
          </div>
        </div>
      </div>
      <div className='mx-auto my-16 px-4 md:max-w-2xl lg:max-w-5xl lg:px-8 lg:mt-0'>
        <h2 className='text-sm font-medium text-gray-900'>Details</h2>
        <div className='mt-4 space-y-6'>
          <p className='text-sm text-gray-600'>{product.details}</p>
        </div>
      </div>
    </div>
  );
}
