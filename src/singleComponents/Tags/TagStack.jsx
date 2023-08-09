/* eslint-disable react/prop-types */
export default function TagStack ({ item }) {
  return (
    <span className='px-2 py-1 flex items-center rounded-full text-gray-100 bg-indigo-900 w-fit gap-2'>
      {item}
    </span>
  )
}
