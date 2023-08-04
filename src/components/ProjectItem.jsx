import profinder from '../assets/WorksFrames/profinder.webp'
import profinder2 from '../assets/Profinder/profinder2.webp'
import profinder3 from '../assets/Profinder/profinder3.webp'

export default function ProjectItem () {
  return (
    <section className='text-gray-400 body-font border border-red-500'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='lg:w-2/3 mx-auto'>
          <div className='flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4'>
            <img alt='gallery' className='w-full object-cover h-full object-center block opacity-25 absolute inset-0' src={profinder} />
            <div className='text-center relative z-10 w-full'>
              <h2 className='text-2xl text-white font-medium title-font mb-2'>ProFinder</h2>
              <span
                className='inline-block px-2 py-1 bg-slate-200 dark:bg-indigo-700 rounded-md'
              >
                NodeJS
              </span>
              <span
                className='inline-block px-2 py-1 bg-slate-200 dark:bg-indigo-900 rounded-md'
              >
                ReactJS
              </span>
              <a className='mt-3 text-indigo-300 inline-flex items-center'>Deploy
              </a>
            </div>
          </div>
          <div className='flex flex-wrap -mx-2'>
            <div className='px-2 w-1/2'>
              <div className='flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative'>
                <img alt='gallery' className='w-full object-cover h-full object-center block opacity-25 absolute inset-0' src={profinder2} />
              </div>
            </div>
            <div className='px-2 w-1/2'>
              <div className='flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative'>
                <img alt='gallery' className='w-full object-cover h-full object-center block opacity-25 absolute inset-0' src={profinder3} />
                <div className='text-center relative z-10 w-full'>
                  <h2 className='text-xl text-white font-medium title-font mb-2'>Shooting Stars</h2>
                  <p className='leading-relaxed'>Skateboard +1 mustache fixie paleo lumbersexual.</p>
                  <a className='mt-3 text-indigo-300 inline-flex items-center'>Learn More
                    <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-4 h-4 ml-2' viewBox='0 0 24 24'>
                      <path d='M5 12h14M12 5l7 7-7 7' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
