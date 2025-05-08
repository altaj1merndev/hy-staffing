"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo_img from "../../../../public/accets/Logo.png"
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";

const routes = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Job Seekers",
        link:"/"
    },
    {
        name:"Employer Services",
        link:"/"
    },
    {
        name:"Contact Us",
        link:"/"
    },
]

const HeaderButtons = () => {
    return (
      <div className="flex gap-2">
        <select className="border border-[#6777FE] rounded-md px-3 py-2 text-sm">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
        <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm px-4 py-2 rounded-md shadow">
          Client Login
        </button>
      </div>
    );
  };

export default function NavBar() {
const [isOpen, setIsOpen]  = useState(false)
  return (

    <div>
    {/* Large devices */}
    <div className="hidden lg:flex items-center justify-between relative">
      <Image height={100} width={100} alt="logo" className="h-16 w-auto object-cover" src={logo_img} />
      <div className="text-[#141414] text-[16px] space-x-5">
        {routes.map((route, idx) => (
          <Link key={idx} href={route.link} className='hover:text-[#6777FE]'>
            {route.name}
          </Link>
        ))}
      </div>
      <HeaderButtons />
    </div>

    {/* Mobile devices */}
    <div className="flex lg:hidden items-center justify-between px-4 py-2">
      <Image height={100} width={100} alt="logo" className="h-16 w-32" src={logo_img} />
      <button onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu size={24} />
      </button>
    </div>

    {/* Mobile Dropdown */}
    {isOpen && (
      <div className="lg:hidden flex flex-col bg-white px-4 py-2 shadow-md absolute right-0">
        {routes.map((route, idx) => (
          <Link
            key={idx}
            href={route.link}
            className="py-2 border-b border-gray-200 text-sm text-gray-700 hover:text-[#6777FE]"
            onClick={() => setIsOpen(false)} // close menu on click
          >
            {route.name}
          </Link>
        ))}
        <div className="mt-4">
          <HeaderButtons />
        </div>
      </div>
    )}
  </div>
  )
}
