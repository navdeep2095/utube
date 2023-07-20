import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
        {Array(50).fill("").map((_)=> (
            <div className='p-2 m-2 w-72 h-80 rounded-lg bg-gray-200'>
                <div className='w-64 h-52 bg-gray-300 rounded-lg' />
                <div className='m-2 w-60 h-5 bg-gray-300 rounded-lg' />
                <div className='m-2 w-28 h-5 bg-gray-300 rounded-lg' />
                <div className='m-2 w-28 h-5 bg-gray-300 rounded-lg' />
            </div>
        ))}
    </div>
  )
}

export default Shimmer