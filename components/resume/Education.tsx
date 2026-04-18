import React from 'react'

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
        <div className='mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-4'>
          <div className='min-w-0 w-full sm:w-[80%]'>
            <h2 className='text-lg text-green-600 sm:text-xl'>{expInfo.school}</h2>
            <ul className='ml-2 mt-3 w-full list-disc pl-5 sm:w-[80%]'>
              <li className="text-sm leading-relaxed sm:text-base">{expInfo.desc}</li>
            </ul>
          </div>
          <div className='flex shrink-0 flex-col text-sm sm:w-[20%] sm:text-right sm:text-base'>
            <p>{expInfo.period}</p>
            <p>{expInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience