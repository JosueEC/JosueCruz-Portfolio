import { Button, Typography } from '@material-tailwind/react'

/* eslint-disable react/prop-types */
export default function ServiceItem ({ title, icon }) {
  return (
    <Button
      variant='outlined'
      color='cyan'
      className='hover:-translate-y-2 transform transition p-5 rounded-md border-2 border-cyan-500 flex-col items-center'
    >
      <div className='text-gray-300 w-10 h-10 mb-3'>
        {icon}
      </div>
      <Typography
        as='p'
        variant='small'
        color='white'
      >{title}
      </Typography>
    </Button>
  )
}
