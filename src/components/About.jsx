import SectionTitle from './SectionTitle'

export default function About () {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
      <div className='w-full md:w-6/12 space-y-5'>
        <SectionTitle>About me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          Backend Developer with a background as a Computer Systems Engineer, with experience in web application development using various technologies and frameworks in the industry.
        </p>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          My goal is to design and develop innovative and scalable solutions that meet user needs and business goals.
        </p>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          Please do not hesitate to contact me. I am confident that I can make a significant contribution to your development team.
        </p>
        <a href='mailto:josueev.cruz@gmail.com' className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'>josueev.cruz@gmail.com</a>
      </div>
      <img src='https://avatars.githubusercontent.com/u/34457838?v=4' alt='JosueCruz' className='w-full md:w-6/12 rounded-lg object-cover' />
    </div>
  )
}
