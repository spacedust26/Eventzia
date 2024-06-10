import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className='container bg-[#321E1E] p-[20px] rounded-lg flex gap-[20px] cursor-pointer w-full text-white'>
      <MdSupervisedUserCircle size={24} />
      <div className="texts flex flex-col">
        <span className='title'>Total Events</span>
        <span className='number font-bold'>21</span>
        <span className='detail text-sm font-semibold'>
          <span className='positive text-lime-500'>2%</span> increase than previous.
        </span>
      </div>
    </div>
  )
}

export default Card
