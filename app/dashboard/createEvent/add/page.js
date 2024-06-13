import React from 'react'
import Link from 'next/link'

const add = () => {
  return (
    <div className='container bg-[#321E1E] p-[20px] rounded-lg mt-[20px] text-white'>
      <form className='form flex flex-col gap-6' action=''>
        <input className='p-3 bg-transparent border border-[#503C3C] rounded-lg' type='text' placeholder='Enter the name of the event' name='eventName' required />
        <div className="flex flex-row justify-between items-center">
          <div className=""><label for="date" class="block" className='text-gray-200 mb-5'>Select date of event: </label>
          <input type='date' id='date' name='date' className='block px-3 py-2 border border-[#321E1E] text-[#321E1E] rounded-md shadow-sm focus:outline-none focus:ring-[#d4af37] focus:border-[#d4af37] sm:text-sm' /></div>
          <Link href="/dashboard/createEvent/add/categories"><button className='category p-5 bg-[#503C3C] rounded-lg text-white w-full'>Select Category</button></Link>
        </div>
        <textarea type="text" name='desc' id='desc' rows="8" placeholder='Write down important notes to refer later' className='p-3 bg-transparent border border-[#503C3C] rounded-lg' />
        <button type='submit' className='p-5 bg-[#d4af37] rounded-lg text-[#321E1E]'>Check Out</button>
      </form>
    </div>
  )
}

export default add
