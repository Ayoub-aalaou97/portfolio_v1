import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import SiteLogo from '@/public/img/logo.png'

const Header = () => {
  return (
    <header className='border-b-1 border-gray-100'>
      <div className="header-wrapper container mx-auto flex w-full max-w-[1080px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-0">
        <div className="site-logo-container flex min-w-0 max-w-full items-center gap-2 sm:gap-3">
          <Image
            src={SiteLogo}
            width={40}
            height={40}
            alt="Site Logo"
            className="shrink-0"
          />
          <h1 className='gradient-title truncate text-lg font-medium leading-tight sm:text-2xl sm:self-end sm:leading-[38px]'>Ayoub Aalaou</h1>
        </div>

        <nav className='flex shrink-0 items-center gap-4 text-sm sm:text-base'>
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;