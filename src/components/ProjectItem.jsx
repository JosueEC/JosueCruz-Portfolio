import FeatureItem from './FeatureItem'
import profinderFeatures from '../data/profinder'

export default function ProjectItem () {
  return (
    <section className='text-gray-400 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap w-full mb-20'>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-white'>ProFinder: Plataforma Freelance</h1>
            <div className='h-1 w-20 bg-indigo-500 rounded' />
          </div>
          <p className='lg:w-1/2 w-full leading-relaxed text-gray-300 text-lg'>Participé en un proyecto cuyo objetivo era desarrollar una aplicación web para conectar profesionales y técnicos que ofrecen servicios con personas que requieren dichos servicios. Trabajé en un equipo de desarrollo ágil utilizando la metodología SCRUM, organizada en sprints de una semana. Presentábamos nuestros avances en el diseño y desarrollo al Product Owner durante estas iteraciones.</p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {
          profinderFeatures.map(({ frame, title, description }) => {
            return (
              <FeatureItem
                key={title}
                frame={frame}
                title={title}
                description={description}
              />
            )
          })
        }
        </div>
      </div>
    </section>
  )
}
