import React from 'react'

const add = () => {
  return (
    <div className='container bg-[#321E1E] p-[20px] rounded-lg mt-[20px] text-white'>
      <form className='form flex flex-col gap-6' action=''>
        <input className='p-3 bg-transparent border border-[#503C3C] rounded-lg' type='text' placeholder='Enter the name of the event' name='title' required />
        <button className='category p-5 bg-[#503C3C] rounded-lg text-white'>Select Category</button>
        <textarea name='desc' id='desc' rows="8" placeholder='Write down important notes to refer later' className='p-3 bg-transparent border border-[#503C3C] rounded-lg'></textarea>
        <button type='submit' className='p-5 bg-[#d4af37] rounded-lg text-[#321E1E]'>Check Out</button>
      </form>
    </div>
  )
}

export default add
