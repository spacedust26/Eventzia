"use client";
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import venue from '@/assets/venue.json';
import Star from '@/components/dashboard/Star';

const GrandPlazaBallroom = () => {
  const pathname = usePathname();
  const venueName = pathname.split("/").pop().replaceAll("_", " ");
  
  // Filter venue data based on the venue name from the pathname
  const venueData = venue.filter(v => v.title === venueName);

  return (
    <div className='flex items-center justify-center flex-col m-8'>
      {venueData.map((v, index) => (
        <div key={index} className="top flex items-center justify-center flex-row gap-8 bg-[#321E1E] p-8 text-white rounded-lg">
          <div className="left rounded-lg">
            <Image src={v.img} width={2000} height={2000} alt="image" className='rounded-lg'/>
          </div>
          <div className="right flex items-start justify-center flex-col gap-2">
            <span className='title text-2xl text-[#d4af37]'>{v.title}</span>
            <span className='about text-sm'>{v.about}</span>
            <span className='address text-sm'>{v.address}</span>
            <Star stars={v.star} reviews={v.review} />
          </div>
        </div>
      ))}
      {venueData.length > 0 && (
        <div className="bottom">
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>Book Now</button>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default GrandPlazaBallroom;
