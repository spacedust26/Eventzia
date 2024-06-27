"use client"
import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from 'next/link';
import Star from '@/components/dashboard/Star';
import { useState, useEffect } from 'react';

const Lightings = () => {
  const [lightings, setLightings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/lightings", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setLightings(data.lightings);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Link href="/dashboard/createEvent/add"><div className='bg-[#321E1E] p-3 w-fit mt-4 rounded-full text-white hover:scale-105 cursor-pointer'><MdOutlineArrowBackIosNew /></div></Link>
      <div className='flex flex-col justify-center items-center mb-8 gap-8'>
        <h1 className='text-3xl font-bold text-[#321E1E]'>Lightings & Fireworks</h1>

        <div className='flex flex-row flex-wrap gap-8 justify-center'>
          {lightings.map((v) => (
            <div key={v.id} className='flex flex-col items-center text-white rounded-lg bg-[#321E1E] w-[300px] h-[430px] overflow-hidden gap-4'>
              <div className="object-contain overflow-hidden">
                <Image src={v.img} width={400} height={400} alt={v.title} />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className='text text-xl font-bold text-[#d4af37]'>{v.title}</div>
                <div className='text-center text-sm mx-2'>{v.address}</div>
                <div className=''>
                  <Star stars={v.star} reviews={v.review} />
                </div>
              </div>
              <Link href={v.viewmore} passHref>
                <button className='bg-[#d4af37] p-2 rounded-full text-[#321E1E] font-bold border-dashed border border-white hover:bg-[#9f8738]'>View More</button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Lightings
