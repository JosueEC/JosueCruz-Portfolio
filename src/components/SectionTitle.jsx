import { Typography } from '@material-tailwind/react'

/* eslint-disable react/prop-types */
export default function SectionTitle ({ text, id }) {
  return (
    <Typography
      id={id}
      variant='lead'
      color='white'
      className='mb-8'
    >
      {text}
    </Typography>
  )
}
