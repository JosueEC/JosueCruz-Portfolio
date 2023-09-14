import ProjectItem from './ProjectItem'
import works from '../data/works'

export default function Works () {
  return (
    <div id='works' className='mt-20 md:mt-40'>
      <div>
        {
          works.map(({ title, tech, description, linkDeploy, linkRepository, featuresData }) => {
            return (
              <ProjectItem
                key={title}
                title={title}
                tech={tech}
                description={description}
                linkDeploy={linkDeploy}
                linkRepository={linkRepository}
                featuresData={featuresData}
              />
            )
          })
        }
      </div>
    </div>
  )
}
