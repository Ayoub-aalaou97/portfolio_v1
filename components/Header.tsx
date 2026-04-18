import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import SiteLogo from '@/public/img/logo.png'

const Header = () => {
  return (
    <header className='border-b-1 border-gray-100'>
      <div className="header-wrapper container mx-auto w-full px-8 flex justify-between ">
        <div className="site-logo-container flex items-center">
          <Image
            src={SiteLogo}
            width={40}
            height={40}
            alt="Site Logo"
          />
          <h1 className='gradient-title text-2xl font-medium self-end leading-[38px]'>Ayoub Aalaou</h1>
        </div>

        <nav className='flex items-center'>
            <Link href="/">Home</Link>
            <Link href="/resume" className='ml-4 ml-2'>Resume</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;