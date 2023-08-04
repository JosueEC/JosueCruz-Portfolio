/* eslint-disable react/prop-types */
export default function ButtonAction ({ text }) {
  return (
    <a href='#works' className='inline-flex items-center justify-center text-sm md:text-xl font-semibold text-white duration-200 bg-indigo-600 px-4 py-2.5 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:outline-gray-600'>
      {text}
    </a>
  )
}
