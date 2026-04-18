import React from 'react'
import Image from 'next/image'

interface educationInfo{
  school: string,
  desc: string,
  period: string,
  location: string,
  website: string
}

const Experience = (expInfo:  educationInfo) => {
  return (
    <div>
      <div className='container p-2'>
        <div className='flex justify-between mt-4'>
          <div className='w-[80%]'>
            <h2 className='text-green-600'>{expInfo.school}</h2>
            <ul className='list-disc pl-5 ml-2 mt-3 w-[80%]'>
              <li>{expInfo.desc}</li>
            </ul>
          </div>
          <div className='flex-col w-[20%]'>
            <p>{expInfo.period}</p>
            <p>{expInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience