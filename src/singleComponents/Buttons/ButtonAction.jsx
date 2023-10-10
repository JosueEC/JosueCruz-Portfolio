import { Button } from '@material-tailwind/react'

/* eslint-disable react/prop-types */
export default function ButtonAction ({ text }) {
  return (
    <Button
      variant='outlined'
      color='cyan'
    >
      <a href='#works'>
        {text}
      </a>
    </Button>
  )
}
