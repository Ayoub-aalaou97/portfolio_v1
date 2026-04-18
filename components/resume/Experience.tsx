import React from 'react'
import Image from 'next/image'

interface experienceInfo{
  company: string,
  position: string,
  period: string,
  location: string,
  tasks: string[],
  website: string
}

const Experience = (expInfo:  experienceInfo) => {
  return (
    <div>
      <div className='container mx-auto w-[756px]'>
        <div className='flex justify-between'>
          <div>
            <h2>{expInfo.company}</h2>
            <p>{expInfo.position}</p>
          </div>
          <div>
            <p>{expInfo.period}</p>
            <p>{expInfo.location}</p>
          </div>
        </div>
        <ul>
          <li>{expInfo.tasks}</li>
          
        </ul>
      </div>
    </div>
  )
}

export default Experience