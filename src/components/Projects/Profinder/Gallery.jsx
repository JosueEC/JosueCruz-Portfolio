import { Carousel } from '@material-tailwind/react'

import image1 from './../../../assets/Profinder/dashboardAdmin.webp'
import image2 from './../../../assets/Profinder/diseñoInterfaces.webp'
import image3 from './../../../assets/Profinder/filtrosTarjetas.webp'
import image4 from './../../../assets/Profinder/gestionUsuarios.webp'
import image6 from './../../../assets/Profinder/sesion.webp'

export default function Gallery () {
  return (
    <div className='relative px-5 lg:px-14'>
      <div className='absolute -inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-xl opacity-75 w-auto lg:w-full md:w-full' />
      <Carousel className='relative rounded-xl'>
        <img
          src={image2}
          alt='image 1'
          className='h-full w-full object-cover'
        />
        <img
          src={image3}
          alt='image 2'
          className='h-full w-full object-cover'
        />
        <img
          src={image4}
          alt='image 3'
          className='h-full w-full object-cover'
        />
        <img
          src={image1}
          alt='image 1'
          className='h-full w-full object-cover'
        />
        <img
          src={image6}
          alt='image 3'
          className='h-full w-full object-cover'
        />
      </Carousel>

    </div>
  )
}
