/* eslint-disable react/prop-types */
export default function ButtonDownloadFile ({ text }) {
  return (
    <a href='../../assets/Files/Josue Cruz - Backend Developer.pdf' download='Josue Cruz - Backend Developer.pdf' className='inline-flex items-center justify-center text-sm md:text-xl font-semibold text-white duration-200 bg-indigo-600 px-4 py-2.5 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:outline-gray-600'>
      {text}
    </a>
  )
}
