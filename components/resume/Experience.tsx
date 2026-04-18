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
      <div className='container p-2'>
        <div className='flex justify-between mt-4'>
          <div>
            <h2 className='text-green-600'>{expInfo.company}</h2>
            <p className='text-green-500'>{expInfo.position}</p>
          </div>
          <div className='flex flex-col'>
            <p>{expInfo.period}</p>
            <p>{expInfo.location}</p>
          </div>
        </div>
        <ul className="list-disc pl-5 ml-2 mt-3 w-[80%]">
          {expInfo.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default Experience