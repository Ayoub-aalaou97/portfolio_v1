import React from 'react'

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
        <div className='mt-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4'>
          <div className="min-w-0">
            <h2 className='text-lg text-green-600 sm:text-xl dark:text-emerald-400'>{expInfo.company}</h2>
            <p className='text-sm text-green-500 sm:text-base dark:text-emerald-300/90'>{expInfo.position}</p>
          </div>
          <div className='flex shrink-0 flex-col text-sm sm:text-right sm:text-base'>
            <p>{expInfo.period}</p>
            <p>{expInfo.location}</p>
          </div>
        </div>
        <ul className="ml-2 mt-3 w-full max-w-none list-disc pl-5 sm:max-w-[80%]">
          {expInfo.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default Experience