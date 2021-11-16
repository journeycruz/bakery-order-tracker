import { imageBuilder } from "../lib/sanity";
import Link from "next/link";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Favorites({ posts, title }) {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none'>
          <h2 className='text-2xl font-extrabold text-gray-900'>
            {title}
          </h2>
          <div className='mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6'>
            {posts.slice(0, 3).map((post) => (
              <div key={post.title} className='group relative'>
                <div className='relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <Link as={`/posts/${post.slug}`} href='/posts/[slug]'>
                  <img
                    src={imageBuilder(post.coverImage)
                      .width(1240)
                      .height(540)
                      .url()}
                    alt={post.title}
                    className='w-full h-full object-center object-cover'
                  />
                  </Link>
                </div>
                <h3 className='mt-6 text-sm text-gray-500'>
                  <span>{post.title}</span>
                </h3>
                {/* <p className="text-base font-semibold text-gray-900">{callout.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
