/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
    return (
      <div className="bg-rose-gold-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block cormorant-sub text-gold">Have a custom order?</span>
            <span className="block text-black mt-2">Request a quote today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-rose-gold-700 hover:bg-rose-gold-900"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-indigo-600 bg-rose-gold-50 hover:bg-rose-gold-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }