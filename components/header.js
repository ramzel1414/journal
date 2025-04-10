import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

          
        </div>
      </nav>
    </header>
  )
}

export default Header