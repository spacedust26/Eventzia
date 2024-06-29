import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = ({ title, number, detail, icon }) => {
  return (
    <div className='container bg-[#321E1E] p-[20px] rounded-lg flex gap-[20px] cursor-pointer w-full text-white hover:bg-[#503C3C]'>
      {icon && React.cloneElement(icon, { size: 24 })}
      <div className="texts flex flex-col gap-2">
        <span className='title'>{title}</span>
        <span className='number'>{number}</span>
        <span className='detail text-sm'>{detail}</span>
      </div>
    </div>
  );
};

export default Card;
