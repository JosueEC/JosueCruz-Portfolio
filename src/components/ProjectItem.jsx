/* eslint-disable react/prop-types */
import { BsFillRocketTakeoffFill, BsGithub } from 'react-icons/bs'
import FeatureItem from './FeatureItem'
import ButtonLink from '../singleComponents/Buttons/ButtonLink'
import TagStack from '../singleComponents/Tags/TagStack'

export default function ProjectItem ({ title, tech, description, linkDeploy, linkRepository, featuresData }) {
  return (
    <section className='text-gray-400 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap w-full mb-20'>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-white'>{title}</h1>
            <div className='h-1 w-20 bg-indigo-500 rounded mb-6' />
            <div className='space-x-4'>
              <ButtonLink
                icon={<BsFillRocketTakeoffFill />}
                text='Ver deploy'
                linkPage={linkDeploy}
              />
              <ButtonLink
                icon={<BsGithub />}
                text='Ver repositorio'
                linkPage={linkRepository}
              />
            </div>
          </div>
          <p className='lg:w-1/2 w-full leading-relaxed text-gray-300 text-lg'>
            {description}
          </p>
          <div className='flex flex-wrap gap-3 mt-5 lg:w-2/5'>
            {
              tech.map((item) => {
                return (
                  <TagStack
                    key={item}
                    item={item}
                  />
                )
              })
            }
          </div>
        </div>
        <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-400 mb-5'>Mis aportes:</h1>
        <div className='flex flex-wrap -m-4'>
          {
          featuresData.map(({ frame, title, description }) => {
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
