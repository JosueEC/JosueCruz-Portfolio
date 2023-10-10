import { BiLogoPostgresql, BiMailSend } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { SiChakraui, SiExpress, SiFirebase, SiMercadopago, SiPassport, SiRedux, SiSequelize } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { AiFillPieChart } from 'react-icons/ai'

export default function TechStack () {
  return (
    <div className='max-w-screen-xl mx-auto -mt-5 mb-20'>
      <div className='grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-5'>
        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <FaNodeJs className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <SiExpress className='text-gray-300 w-10 h-10' />

        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <SiSequelize className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <BiLogoPostgresql className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <BiMailSend className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <SiPassport className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <SiFirebase className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <SiMercadopago className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <RiReactjsLine className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <SiRedux className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <SiChakraui className='text-gray-300 w-10 h-10' />
        </div>

        <div className='flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1'>
          <AiFillPieChart className='text-gray-300 w-10 h-10' />
        </div>
      </div>
    </div>
  )
}
