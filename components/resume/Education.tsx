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
      <div className='container mx-auto w-[756px]'>
        <div className='flex justify-between'>
          <div>
            <h2>{expInfo.school}</h2>
            <p>{expInfo.desc}</p>
          </div>
          <div>
            <p>{expInfo.period}</p>
            <p>{expInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience