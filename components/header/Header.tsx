'use client'

import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Menu from './Menu'
import { SearchBox } from './SearchBox'
import Image from 'next/image'



const Header = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    window.addEventListener('themeChange', (event: Event) => {
      setTheme((event as CustomEvent).detail.theme);
    });
  }, []);
  
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <div>
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <Link href="/" >
              
            
            <Image
            src={theme === 'light' ? '/logo.jpeg' : '/l2.png'}
            alt="Logo"
            width={120}
            height={90}
            className="object-cover ml-9"
          />
          </Link> 
       
          </div>

          <Menu />
        </div>
        <div className="bg-base-300 block md:hidden text-center pb-3">
          <SearchBox />
        </div>
      </nav>
    </header>
  )

}

export default Header
