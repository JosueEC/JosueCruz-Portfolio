/* eslint-disable react/prop-types */
export default function ButtonLink ({ icon, text, linkPage }) {
  return (
    <a href={linkPage} target='_blank' rel='noreferrer' className='inline-flex items-center justify-center text-sm md:text-xl font-semibold text-gray-50 duration-200 bg-cyan-500 px-4 py-2.5 rounded-md hover:bg-cyan-700 focus:outline-none focus-visible:outline-gray-600 gap-3'>
      {icon} {text}
    </a>
  )
}
