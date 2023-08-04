import { BsGithub, BsLinkedin } from 'react-icons/bs'
import ButtonAction from '../singleComponents/Buttons/ButtonAction'
import ButtonDownloadFile from '../singleComponents/Buttons/ButtonDownloadFile'

export default function Hero () {
  return (
    <section id='hero' className='md:h-screen flex items-center'>
      <div className='items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24'>
        <div className='justify-center w-full text-center lg:p-2 max-auto'>
          <div className='justify-center w-full mx-auto'>
            <h1 className='text-6xl md:text-8xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>
              Hi, I'm Josue Cruz
            </h1>
            <p className='max-w-xl mx-auto mt-4 text-lg md:text-3xl tracking-tight text-gray-600 dark:text-gray-300'>
              Welcome to my personal portfolio
            </p>
          </div>
          <div className='flex flex-row items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row'>
            <ButtonAction text='See works' />
            <ButtonDownloadFile text='Download CV' />
          </div>
        </div>

        <div className='flex justify-center gap-6 mt-6'>
          <a className='p-1 -m-1 group' href='#'>
            <BsGithub class='w-6 h-6 transition text-indigo-600
            dark:text-white hover:fill-indigo-500 md hydrated'
            />
          </a>
          <a className='p-1 -m-1 group' aria-label='Follow on LinkedIn' href='#'>
            <BsLinkedin class='w-6 h-6 transition text-2xl text-indigo-600
            dark:text-white hover:fill-indigo-500 md hydrated'
            />
          </a>
        </div>
      </div>
    </section>
  )
}
