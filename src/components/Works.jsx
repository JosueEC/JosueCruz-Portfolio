import SectionTitle from './SectionTitle'
import WorkItem from './WorkItem'
import works from '../data/works'

export default function Works () {
  return (
    <div id='works' className='py-12'>
      <SectionTitle id='works'>Recent Works</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          works.map(({ title, image, tech }) => {
            return (
              <WorkItem
                key={title}
                title={title}
                image={image}
                tech={tech}
              />
            )
          })
        }
      </div>
    </div>
  )
}
