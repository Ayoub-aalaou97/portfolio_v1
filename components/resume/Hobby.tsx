import React from 'react'
import Image from 'next/image'

const Hobby = () => {
  return (
    <div className='grid grid-cols-4 gap-4 w-[300px] mb-4'>
      <div className="skill-item p-1 rounded-sm inline-block border-2 bg-[#f1f1f1]">
        <Image src="/img/traveler.svg" alt="Travel" width={62} height={62} />
      </div>
      <div className="skill-item p-1 rounded-sm inline-block border-2 bg-[#f1f1f1]">
        <Image src="/img/soccer_ball.svg" alt="Football" width={62} height={62} />
      </div>
      <div className="skill-item p-1 rounded-sm inline-block border-2 bg-[#f1f1f1]">
        <Image src="/img/swimming.svg" alt="Swimming" width={62} height={62} />
      </div>
      <div className="skill-item p-1 rounded-sm inline-block border-2 bg-[#f1f1f1]">
        <Image src="/img/paint_palette.svg" alt="Drawing" width={62} height={62} />
      </div>
    </div>
  )
}

export default Hobby