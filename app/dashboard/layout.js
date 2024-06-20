"use client"
import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Navbar from '@/components/dashboard/Navbar'
import Footer from '@/components/dashboard/Footer'
import { CartContextProvider } from '../lib/CartContext'
import { Toaster } from 'react-hot-toast'

const layout = ({ children }) => {
  return (
    <CartContextProvider>
      <div className={`container flex`}>
        <div className='menu flex-1 bg-[#321E1E] p-[20px]'>
          <Sidebar />
        </div>
        <div className='content flex-4 p-[20px]'>
          <Navbar />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
          <Footer />
        </div>
      </div>
    </CartContextProvider>
  )
}

export default layout
