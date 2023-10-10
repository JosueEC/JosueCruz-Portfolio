/* eslint-disable react/prop-types */
import { Typography } from '@material-tailwind/react'

export default function Title ({ text }) {
  return (
    <Typography
      color='cyan'
      variant='h3'
      textGradient
    >
      {text}
    </Typography>
  )
}
