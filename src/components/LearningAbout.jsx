import SectionTitle from './SectionTitle'
import ServiceItem from './ServiceItem'
import learning from '../data/learning'

export default function LearningAbout () {
  return (
    <div>
      <SectionTitle>Principante en</SectionTitle>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
        {
          learning.map(({ title, icon }) => {
            return (
              <ServiceItem
                key={title}
                title={title}
                icon={icon}
              />
            )
          })
        }
      </div>
    </div>
  )
}
