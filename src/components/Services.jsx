import SectionTitle from './SectionTitle'
import ServiceItem from './ServiceItem'
import services from '../data/services'
import Title from '../singleComponents/Titles/Title'

export default function Services () {
  return (
    <div className='relative py-12' id='stack'>
      <div aria-hidden='true' className='absolute w-[200px] h-[200px] rounded-full bg-gradient-to-b from-blue-600 to-purple-600 blur-3xl opacity-40 md:left-[40%] lg:left-[70%] top-[40%] left-auto' />
      <Title text='Stack Tecnologico' />
      <SectionTitle text='Cuento con dominio avanzado en' />
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
        {services.map(({ title, icon }) => {
          return (
            <ServiceItem
              key={title}
              title={title}
              icon={icon}
            />
          )
        })}
      </div>
    </div>
  )
}
