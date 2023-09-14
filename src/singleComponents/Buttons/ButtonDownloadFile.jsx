/* eslint-disable react/prop-types */
import CV from '../../assets/Files/Josue Cruz - Desarrollador Web.pdf'

export default function ButtonDownloadFile ({ text }) {
  return (
    <a href={CV} target='_blank' rel='noopener noreferrer' download='Josue Cruz - Desarrollador Web.pdf' className='inline-flex items-center justify-center text-sm md:text-xl font-semibold text-white duration-200 bg-indigo-600 px-4 py-2.5 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:outline-gray-600'>
      {text}
    </a>
  )
}
