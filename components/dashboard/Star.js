import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from "react-icons/ai";


const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return <span key={index}>
      {
        stars >= index + 1 ? <FaStar className='icon text-yellow-300' /> : stars >= number ? <FaStarHalfAlt className='icon text-yellow-300' /> : <AiOutlineStar className='icon text-yellow-300' />
      }
    </span>
  })
  return (
      <div className='icon-style flex gap-1 items-center justify-center'>
        {ratingStar}
        <p className='text-sm'>| {reviews} reviews</p>
      </div>
  )
}

export default Star