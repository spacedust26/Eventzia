import React from 'react'
import Image from 'next/image'

const singleEventPage = () => {
  return (
    <div className='container flex gap-5 mt-[20px] text-white'>
      <div className="infoContainer flex-1 bg-[#321E1E] p-[20px] rounded-lg font-bold text-gray-200 h-max">
        <div className="imgContainer w-full h-[300px] relative rounded-lg overflow-hidden mb-[20px]">
          <Image src="/gif/avatar.gif" alt="" fill />
        </div>
        Pranamya Kulal
      </div>
      <div className="formContainer flex-3 bg-[#321E1E] p-[20px] rounded-lg">
        <form action="" className='flex flex-col'>
          <label>Event name</label>
          <input type='text' name='eventName' placeholder='Destination Wedding' className='p-[20px] border border-[#503C3C]  rounded-lg bg-transparent my-[10px]' />
          <label>Event Schedule</label>
          <input type='date' name='date' className='p-[20px] border border-[#503C3C]  rounded-lg bg-transparent my-[10px]' />
          <label>Important Notes</label>
          <textarea type="text" name='desc' id='desc' rows="8" placeholder="" className='p-[20px] border border-[#503C3C]  rounded-lg bg-transparent my-[10px]' />
          <button className='w-full p-5 bg-[#d4af37] rounded-lg text-[#321E1E] cursor-pointer mt-[20px]'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default singleEventPage
