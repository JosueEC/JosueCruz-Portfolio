/* eslint-disable react/prop-types */
import { Typography } from '@material-tailwind/react'

export default function NavItem ({ text, link }) {
  return (
    <Typography
      as='li'
      variant='small'
      className='p-1 font-normal text-cyan-50 hover:text-cyan-200 hover:-translate-y-1 transform transition'
    >
      <a
        href={link}
        className='flex items-center'
      >
        {text}
      </a>
    </Typography>
  )
}
