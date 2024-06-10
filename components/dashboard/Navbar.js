"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdPublic, MdSearch, MdNotifications, MdOutlineChat } from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='container p-[20px] rounded-lg bg-[#321E1E] flex items-center justify-between text-white'>
      <div className="title text-gray-200 font-bold capitalize">{pathname.split("/").pop()}</div>
      <div className="menu flex items-center gap-[20px]">
        <div className="search flex items-center gap-[10px] bg-[#503C3C]  p-[10px] rounded-lg">
          <MdSearch />
          <input type="text" placeholder='Search...' className='input bg-transparent border-none text-white outline-none' />
        </div>
        <div className="icons flex gap-[20px]">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
