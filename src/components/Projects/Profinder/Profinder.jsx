import { BsFillRocketTakeoffFill, BsGithub } from 'react-icons/bs'
import ButtonLink from '../../../singleComponents/Buttons/ButtonLink'
import { Typography } from '@material-tailwind/react'
import demo from './../../../assets/Profinder/demo.mp4'
import Gallery from './Gallery'
import TechStack from './TechStack'

export default function Profinder () {
  return (
    <section className='relative text-gray-400 lg:mt-[170px]' id='projects'>
      <div aria-hidden='true' className='absolute w-[220px] h-[220px] rounded-full bg-gradient-to-b from-blue-600 to-purple-600 blur-3xl opacity-60' />
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <Typography
            as='h1'
            color='cyan'
            className='text-5xl sm:text-2xl md:text-4xl'
          >
            Profinder
          </Typography>
          <Typography
            as='h2'
            variant='lead'
            color='white'
          >
            Portal de Empleo
          </Typography>
          <p className='mb-8 mt-3 leading-relaxed font-inter'>
            Aplicación web que conecta profesionales y técnicos que ofrecen servicios con personas que requieren dichos servicios. Colabore en un equipo de desarrollo ágil utilizando la metodología SCRUM, organizada en sprints de una semana.
          </p>
          <div className='flex justify-center gap-4'>
            <ButtonLink
              icon={<BsFillRocketTakeoffFill />}
              text='Ver deploy'
              linkPage='https://profinder-client.vercel.app/'
            />
            <ButtonLink
              icon={<BsGithub />}
              text='Ver repositorio'
              linkPage='https://github.com/JosueEC/Profinder-client'
            />
          </div>
        </div>
        <div className='relative w-full lg:max-w-lg lg:w-full md:w-1/2'>
          <video className='relative h-full w-full rounded-lg' controls>
            <source src={demo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <TechStack />
      <Gallery />
    </section>
  )
}
