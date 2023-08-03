export default function Footer () {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg'>
      <a href='#hero' className='block text-xl md:text-2xl font-semibold'>Josue Cruz</a>
      <a href='mailto:josueev.cruz@gmail.com' className=' text-sm md:text-md hover:text-indigo-500'>josueev.cruz@gmail.com</a>
      <p className='text-xs  mt-2 text-gray-500'>
        Hecho con 💙 por JosueCruz {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  )
}
