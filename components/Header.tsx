import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import SiteLogo from '@/public/img/logo.png'
import { ThemeToggle } from '@/components/ThemeToggle'

const Header = () => {
  return (
    <header className="border-b border-[var(--header-border)] bg-[var(--page-bg)]/90 backdrop-blur-sm transition-colors duration-200">
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

        <div className="flex shrink-0 flex-wrap items-center gap-4 sm:gap-5">
          <nav className='flex items-center gap-4 text-sm text-[var(--text-primary)] sm:text-base'>
            <Link className="underline-offset-4 transition-opacity hover:opacity-80 hover:underline" href="/">Home</Link>
            <Link className="underline-offset-4 transition-opacity hover:opacity-80 hover:underline" href="/resume">Resume</Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header;