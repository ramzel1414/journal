import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { PenBox, FolderOpen, ChartNoAxesGantt } from 'lucide-react'
import Image from 'next/image'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import UserMenu from "./user-menu";
import { checkUser } from '@/lib/checkUser';


const Header = async () => {

  // const user = await checkUser();

  return (
    <header className='container mx-auto'>
      <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href={"/"}>
          <Image 
            src={'/chelou.png'} 
            alt='Journal Logo' 
            width={60} 
            height={60} 
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/journal/write">
            <Button variant="green" className="flex items-center gap-2">
              <PenBox size={18}/>
              <span className="hidden md:inline">Write a Journal</span>  
            </Button>
          </Link>

          <SignedIn>
            <Link href="/dashboard/collections">
              <Button variant="outline" className="flex items-center gap-2">
                <FolderOpen size={18}/>
                <span className="hidden md:inline">Collections</span>  
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>

            <UserMenu />
          </SignedIn>

        </div>
      </nav>
    </header>
  )
}

export default Header