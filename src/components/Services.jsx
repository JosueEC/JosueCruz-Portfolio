import SectionTitle from './SectionTitle'
import ServiceItem from './ServiceItem'
import services from '../data/services'

export default function Services () {
  return (
    <div className='py-12'>
      <SectionTitle>Cuento con dominio avanzado en:</SectionTitle>
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
