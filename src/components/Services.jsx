import SectionTitle from './SectionTitle'
import ServiceItem from './ServiceItem'
import services from '../data/services'

export default function Services () {
  return (
    <div className='py-12'>
      <SectionTitle>Our Services</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map(({ title, description, icon }) => {
          return (
            <ServiceItem
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          )
        })}
      </div>
    </div>
  )
}
