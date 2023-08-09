import SectionTitle from './SectionTitle'

export default function About () {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
      <div className='w-full md:w-6/12 space-y-5'>
        <SectionTitle>Acerca de mi</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          Backend Developer con formación como Ingeniero en Sistemas Computacionales, con experiencia en el desarrollo de aplicaciones web utilizando diversas tecnologías y frameworks del sector.
        </p>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          Mi objetivo es diseñar y desarrollar soluciones innovadoras y escalables que satisfagan las necesidades de los usuarios y los objetivos de negocio.
        </p>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          No dudes en contactarme. Estoy seguro de que puedo contribuir de manera significativa a tu equipo de desarrollo.
        </p>
        <a href='mailto:josueev.cruz@gmail.com' target='_blank' rel='noreferrer' className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'>josueev.cruz@gmail.com</a>
      </div>
      <img src='https://avatars.githubusercontent.com/u/34457838?v=4' alt='JosueCruz' className='w-full md:w-6/12 rounded-lg object-cover' loading='lazy' />
    </div>
  )
}
