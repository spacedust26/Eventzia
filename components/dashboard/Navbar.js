"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdOutlineShoppingCart, MdSearch, MdNotifications, MdOutlineChat } from 'react-icons/md';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='container p-[20px] rounded-lg bg-[#321E1E] flex items-center justify-between text-white'>
      <div className="title text-gray-200 font-bold capitalize">{pathname.split("/").pop().replaceAll("_"," ")}</div>
      <div className="menu flex items-center gap-[20px]">
        <div className="search flex items-center gap-[10px] bg-[#503C3C] p-[10px] rounded-lg">
          <MdSearch />
          <input type="text" placeholder='Search...' className='input bg-transparent border-none text-white outline-none' />
        </div>
        <div className="icons flex gap-[20px]">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <div className="flex">
            <Link href="/cart"><MdOutlineShoppingCart size={20} /></Link>
            <span className='relative text-[13px] -top-2 right-[10px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center place- text-white'>0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
