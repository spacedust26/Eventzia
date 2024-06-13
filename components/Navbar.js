"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-[#321E1E] text-white flex items-center justify-between h-16 sticky top-0 z-50 px-4 sm:px-8'>
      <div className="logo">
        <img src='gif/EventziaLogo.gif' alt='Eventzia' width={120} />
      </div>
      <div className="flex items-center">
        <ul className={`fixed top-16 left-0 right-0 bg-[#321E1E] flex-col sm:flex-row gap-5 font-bold flex ${isOpen ? 'flex' : 'hidden'} sm:flex static sm:static`}>
          <li className='cursor-pointer px-4 py-2 rounded-full hover:text-[#d4af37]'><Link href={"/"}>Home</Link></li>
          <li className='cursor-pointer px-4 py-2 rounded-full hover:text-[#d4af37]'><Link href="#about">About Us</Link></li>
          <li className='cursor-pointer px-4 py-2 rounded-full hover:text-[#d4af37]'><Link href="#testimonials">Testimonials</Link></li>
          <li className='cursor-pointer px-4 py-2 rounded-full hover:text-[#d4af37]'><Link href="#contact">Contact</Link></li>
          <li className='cursor-pointer px-4 py-2 rounded-full hover:text-[#d4af37] sm:hidden'>
            <button type="button" className="bg-[#d4af37] px-8 py-2 -mx-2 mb-8 rounded-full font-bold text-[#321E1E] hover:bg-[#e1ba43] border border-white">Log In</button>
          </li>
        </ul>
      </div>
      <Link href={"/login"}><button type="button" className="bg-[#d4af37] px-8 py-2 rounded-full font-bold text-[#321E1E] hover:bg-[#e1ba43] border border-white hidden sm:block">Log In</button></Link>
      <button type="button" className="sm:hidden ml-4" onClick={toggleMenu}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>
  )
}

export default Navbar
