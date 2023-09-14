import profinderData from '../data/profinder'
import commitMakerData from '../data/commitMakerData'

export default [
  {
    title: 'ProFinder: Portal de Empleo',
    tech: ['NodeJS', 'Express', 'Sequelize', 'PostgreSQL', 'Nodemailer', 'PassportJS', 'Firebase', 'Mercado Pago', 'ReactJS', 'Redux', 'ChakraUI', 'ChartJS', 'react-hook-form'],
    description: 'Aplicación web que conecta profesionales y técnicos que ofrecen servicios con personas que requieren dichos servicios. Colabore en un equipo de desarrollo ágil utilizando la metodología SCRUM, organizada en sprints de una semana.',
    linkDeploy: 'https://profinder-client.vercel.app/',
    linkRepository: 'https://github.com/JosueEC/Profinder-client',
    featuresData: profinderData
  },
  {
    title: 'CommitMaker: Creador de Commits',
    tech: ['ReactJS', 'Zustand', 'HTML', 'CSS'],
    description: 'CommitMaker es una aplicacion que te ayuda en la creacion de commits basados en el estandar ConventionalCommits, la idea esta pensada para que este estandar de commits sea mas facil de crear y entender por personas que recien estan aprendiendo a utilizarlos.',
    linkDeploy: 'https://commitmaker.vercel.app/',
    linkRepository: 'https://github.com/JosueEC/CommitsMaker',
    featuresData: commitMakerData
  }
]
