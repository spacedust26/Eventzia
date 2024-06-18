import Search from '@/components/dashboard/Search'
import Link from 'next/link'
import React from 'react'
import Pagination from '@/components/dashboard/pagination'

const createEvent = ({ placeholder }) => {
  return (
    <div className='container bg-[#321E1E] p-[20px] rounded-lg mt-[20px] text-white'>
      <div className="top flex items-center justify-between">
        <Search placeholder='Search for an event...' />
        <Link href="/dashboard/createEvent/add">
          <button className='addButton p-[10px] text-[#321E1E] border-none rounded-lg cursor-pointer bg-[#d4af37] font-bold'>Create Event</button></Link>
      </div>
      <table className='table  w-full'>
        <thead>
          <tr>
            <td className='p-[10px]'>Event Name</td>
            <td className='p-[10px]'>Status</td>
            <td className='p-[10px]'>Event Date</td>
            <td className='p-[10px]'>Amount</td>
            <td className='p-[10px]'>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-[10px]'><div className='user flex gap-2 items-center flex-row'>Destination Wedding</div></td>
            <td className='p-[10px]'>Active</td>
            <td className='p-[10px]'>01.07.2025</td>
            <td className='p-[10px]'>Rs 2000000</td>
            <td className='p-[10px]'>
              <div className="buttons flex gap-2">
                <Link href="/dashboard/createEvent/test"><button className='button px-[5px] py-[10px] rounded-lg border-none cursor-pointer view bg-teal-500'>View</button></Link>
                <button className='button px-[5px] py-[10px] rounded-lg cursor-pointer delete border-none bg-red-500'>Delete</button>
              </div>
            </td>
          </tr>

          <tr>
            <td className='p-[10px]'><div className='user flex gap-2 items-center flex-row'>Destination Wedding</div></td>
            <td className='p-[10px]'>Active</td>
            <td className='p-[10px]'>01.07.2025</td>
            <td className='p-[10px]'>Rs 2000000</td>
            <td className='p-[10px]'>
              <div className="buttons flex gap-2">
                <Link href=""><button className='button px-[5px] py-[10px] rounded-lg border-none cursor-pointer view bg-teal-500'>View</button></Link>
                <button className='button px-[5px] py-[10px] rounded-lg cursor-pointer delete border-none bg-red-500'>Delete</button>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default createEvent
