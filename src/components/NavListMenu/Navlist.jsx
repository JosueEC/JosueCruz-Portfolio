import NavItem from './NavItem'

export default function Navlist () {
  return (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <NavItem
        text='Inicio'
        link='#hero'
      />
      <NavItem
        text='Stack Tecnologico'
        link='#stack'
      />
      <NavItem
        text='Proyectos'
        link='#projects'
      />
      <NavItem
        text='Acerca de mi'
        link='#about'
      />
    </ul>
  )
}
