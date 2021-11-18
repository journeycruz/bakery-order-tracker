export default function HomeTicker() {
  return (
    <div class='relative flex overflow-x-hidden'>
      <div class='py-12 animate-loop whitespace-nowrap'>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 1</span>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 2</span>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 3</span>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 4</span>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 5</span>
      </div>

      <div class='absolute top-0 py-12 animate-loop2 whitespace-nowrap'>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 1</span>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 2</span>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 3</span>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 4</span>
        <span class='mx-4 text-4xl p-6 bg-gray-100 shadow-xl h-32 w-20 rounded-3xl'>Marquee Item 5</span>
      </div>
    </div>
  );
}
