/* eslint-disable react/prop-types */
import { Button } from '@material-tailwind/react'
import CV from '../../assets/documents/Josue Cruz - Desarrollador Web.pdf'

export default function ButtonDownloadFile ({ text }) {
  return (
    <Button
      variant='gradient'
      color='cyan'
    >
      <a href={CV} target='_blank' rel='noopener noreferrer' download='Josue Cruz - Desarrollador Web.pdf'>
        {text}
      </a>
    </Button>
  )
}
