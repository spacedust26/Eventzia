import React from 'react'
import Image from 'next/image'

const EventHistory = () => {
  return (
    <div className='container bg-[#321E1E] p-[20px] rounded-lg text-white'>
      <h2 className='title mb-[20px] font-bold text-gray-200'>Recent Event History</h2>
      <table className='table w-full'>
        <thead>
          <tr>
            <td className='p-[10px]'>Event Name</td>
            <td className='p-[10px]'>Status</td>
            <td className='p-[10px]'>Date</td>
            <td className='p-[10px]'>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td className='p-[10px]'><div className='user flex gap-2 items-center flex-row'><Image src="/gif/avatar.gif" alt="avatar" width={40} height={40} className="userImage object-cover rounded-full" />Destination Wedding</div></td>
            <td className='p-[10px]'><span className='status text-sm pending bg-[#E7D37F] rounded-md p-[5px]'>Pending</span></td>
            <td className='p-[10px]'>01.07.2025</td>
            <td className='p-[10px]'>Rs 2000000</td>
          </tr>

          <tr>
          <td className='p-[10px]'><div className='user flex gap-2 items-center flex-row'><Image src="/gif/avatar.gif" alt="avatar" width={40} height={40} className="userImage object-cover rounded-full" />Birthday Celebration</div></td>
            <td className='p-[10px]'><span className='status text-sm done bg-green-500 rounded-md p-[5px]'>Done</span></td>
            <td className='p-[10px]'>26.05.2004</td>
            <td className='p-[10px]'>Rs 5000</td>
          </tr>

          <tr>
          <td className='p-[10px]'><div className='user flex gap-2 items-center flex-row'><Image src="/gif/avatar.gif" alt="avatar" width={40} height={40} className="userImage object-cover rounded-full" />Office Party</div></td>
            <td className='p-[10px]'><span className='status text-sm cancelled bg-red-400 rounded-md p-[5px]'>Cancelled</span></td>
            <td className='p-[10px]'>11.06.2024</td>
            <td className='p-[10px]'>Rs 10000</td>
          </tr>

          <tr>
          <td className='p-[10px]'><div className='user flex gap-2 items-center flex-row'><Image src="/gif/avatar.gif" alt="avatar" width={40} height={40} className="userImage object-cover rounded-full" />House Party</div></td>
            <td className='p-[10px]'><span className='status text-sm pending bg-[#E7D37F] rounded-md p-[5px]'>Pending</span></td>
            <td className='p-[10px]'>05.08.2024</td>
            <td className='p-[10px]'>Rs 8000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EventHistory
