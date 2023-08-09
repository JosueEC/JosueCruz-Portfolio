/* eslint-disable react/prop-types */
import { BsFillPatchCheckFill } from 'react-icons/bs'

export default function FeatureItem ({ frame, title, description }) {
  return (
    <div className='xl:w-2/4 md:w-full p-4'>
      <div className='dark:bg-slate-800 bg-opacity-40 p-6 rounded-lg h-full'>
        <img className='h-40 xl:h-80 md:h-80 rounded w-full object-cover object-center mb-6' src={frame} alt='content' loading='lazy' />
        <h3 className='tracking-widest text-indigo-400 text-xs font-medium title-font'><BsFillPatchCheckFill className='inline-block mr-1 text-indigo-400' />FEATURE</h3>
        <h2 className='text-lg text-white font-medium title-font mb-4'>{title}</h2>
        <p className='leading-relaxed text-base mb-4'>{description}</p>
      </div>
    </div>
  )
}
