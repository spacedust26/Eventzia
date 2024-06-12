import React from 'react'

const pagination = () => {
  return (
    <div className='container p-[10px] flex justify-between'>
      <button className='button bg-[#d4af37] rounded-lg text-[#321E1E] px-[10px] py-[5px] cursor-not-allowed'>Previous</button>
      <button className='button bg-[#d4af37] rounded-lg text-[#321E1E] px-[10px] py-[5px] cursor-pointer '>Next</button>
    </div>
  )
}

export default pagination
