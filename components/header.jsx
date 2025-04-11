"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox, FolderOpen, ChartNoAxesGantt } from 'lucide-react'

const Header = () => {
  return (
    <header className='container mx-auto'>
      <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href={"/"}>
          <Image 
            src={'/journal.jpg'} 
            alt='Journal Logo' 
            width={60} 
            height={60} 
          />
        </Link>
        <div className="flex items-center gap-4">
          <SignedOut>
            <Link href="/journal/write">
              <Button variant="green" className="flex items-center gap-2">
                <PenBox size={18}/>
                <span className="hidden md:inline">Write a Journal</span>  
              </Button>
            </Link>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard/collections">
              <Button variant="green" className="flex items-center gap-2">
                <FolderOpen size={18}/>
                <span className="hidden md:inline">Collections</span>  
              </Button>
            </Link>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-16 h-16",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Dashboard"
                  labelIcon={<ChartNoAxesGantt size={15} />} 
                  href="/dashboard"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>

        </div>
      </nav>
    </header>
  )
}

export default Header