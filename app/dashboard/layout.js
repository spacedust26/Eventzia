import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Navbar from '@/components/dashboard/Navbar'

const layout = ({children}) => {
  return (
    <div className={`container flex`}>
      <div className='menu flex-1 bg-[#321E1E] p-[20px]'>
        <Sidebar />
      </div>
      <div className='content flex-4 p-[20px]'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default layout
