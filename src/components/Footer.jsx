import { BsGithub, BsLinkedin, BsFillHeartFill } from 'react-icons/bs'

export default function FooterClean () {
  return (
    <footer className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <a href='#hero' className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
          <span className='ml-3 text-xl'>JosueCruz</span>
        </a>
        <p className='text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'> Made with <BsFillHeartFill className='inline-block text-blue-600' /> by JosueCruz © {new Date().getFullYear()} All rights reserved
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-2'>
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
        </span>
      </div>
    </footer>
  )
}
