import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Button, Typography } from '@material-tailwind/react'
import fullstackCV from '../assets/documents/Josue Cruz - Desarrollador Fullstack.pdf'

export default function Hero () {
  return (
    <section id='hero' className='relative md:h-screen flex items-center'>
      <div aria-hidden='true' className='absolute w-[200px] h-[200px] rounded-full bg-gradient-to-b from-blue-600 to-purple-600 blur-3xl opacity-40 top-[10%] left-[20%] md:left-[30%] md:top-[15%] lg:top-[20%] lg:left-[37%]' />
      <div className='items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24'>
        <div className='justify-center w-full text-center lg:p-2 max-auto'>
          <div className='justify-center w-full mx-auto'>
            <Typography
              as='h2'
              variant='h2'
              color='cyan'
              className='sm:text-6xl md:text-8xl'
              textGradient
            >
              Josue Cruz
            </Typography>
            <Typography
              as='h1'
              color='white'
              className='sm:text-2xl md:text-4xl'
            >
              Desarrollador FullStack
            </Typography>
          </div>
          <div className='flex flex-row items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row'>
            <a href='#projects'>
              <Button
                variant='outlined'
                color='cyan'
              >
                Ver proyectos
              </Button>
            </a>
            <a href={fullstackCV} target='_blank' rel='noreferrer' download='Josue Cruz - Desarrollador FullStack'>
              <Button
                variant='gradient'
                color='cyan'
              >
                Descargar CV
              </Button>
            </a>
          </div>
        </div>

        <div className='flex justify-center gap-6 mt-6'>
          <a className='p-1 -m-1 group' href='https://github.com/JosueEC' target='_blank' rel='noreferrer'>
            <BsGithub className='w-6 h-6 transition text-indigo-600
            dark:text-white hover:fill-cyan-400 md hydrated'
            />
          </a>
          <a className='p-1 -m-1 group' aria-label='Follow on LinkedIn' href='https://www.linkedin.com/in/josue-evangelista-cruz' target='_blank' rel='noreferrer'>
            <BsLinkedin className='w-6 h-6 transition text-2xl text-indigo-600
            dark:text-white hover:fill-cyan-400 md hydrated'
            />
          </a>
        </div>
      </div>
    </section>
  )
}
