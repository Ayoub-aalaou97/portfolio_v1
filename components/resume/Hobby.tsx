import React from 'react'
import Image from 'next/image'

const Hobby = () => {
  return (
    <div className='mb-4 mt-4 grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4'>
      <div className="skill-item inline-block rounded-sm border-2 border-zinc-200 bg-[var(--surface-muted)] p-1 dark:border-zinc-600">
        <Image src="/img/traveler.svg" alt="Travel" width={62} height={62} />
      </div>
      <div className="skill-item inline-block rounded-sm border-2 border-zinc-200 bg-[var(--surface-muted)] p-1 dark:border-zinc-600">
        <Image src="/img/soccer_ball.svg" alt="Football" width={62} height={62} />
      </div>
      <div className="skill-item inline-block rounded-sm border-2 border-zinc-200 bg-[var(--surface-muted)] p-1 dark:border-zinc-600">
        <Image src="/img/swimming.svg" alt="Swimming" width={62} height={62} />
      </div>
      <div className="skill-item inline-block rounded-sm border-2 border-zinc-200 bg-[var(--surface-muted)] p-1 dark:border-zinc-600">
        <Image src="/img/paint_palette.svg" alt="Drawing" width={62} height={62} />
      </div>
    </div>
  )
}

export default Hobby