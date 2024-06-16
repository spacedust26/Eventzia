import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from 'next/link';

const venue = [
  {
    img: '/category/photo/img1.jpg',
    title: 'LensCraft',
    desc: '123 Shutter Street, Aperture Town, Lensville',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },

  {
    img: '/category/photo/img2.jpg',
    title: 'Focus Frames',
    desc: '456 Snapshot Lane, Capture City, Shutterland',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },

  {
    img: '/category/photo/img3.jpg',
    title: 'EShutter Speed',
    desc: '789 Flash Avenue, Lensville, Snapville',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/photo/img4.jpg',
    title: 'Picture Perfect',
    desc: '321 Frame Road, Exposure Town, Captureland',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/photo/img5.jpg',
    title: 'Capture Moments',
    desc: '567 Aperture Boulevard, Focus City, Lensborough',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/photo/img6.jpg',
    title: 'Frame Focus',
    desc: '890 Viewpoint Street, Camera Town, Lensfield',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/photo/img7.jpg',
    title: 'Lens Legend',
    desc: '234 Flash Lane, Snapshot Village, Snapfield',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/photo/img8.jpg',
    title: 'Snapshot Studio',
    desc: '678 Lens Avenue, Picture City, Focusville',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
]

const Venue = () => {
  return (
    <>
    <Link href="/dashboard/createEvent/add"><div className='bg-[#321E1E] p-3 w-fit mt-4 rounded-full text-white hover:scale-105 cursor-pointer'><MdOutlineArrowBackIosNew /></div></Link>
    <div className='flex flex-col justify-center items-center mb-8 gap-8'>
      <h1 className='text-3xl font-bold text-[#321E1E]'>Photography & Videography</h1>


        <div className='flex flex-row flex-wrap gap-8 justify-center'>
        {venue.map((v) => (
          <div key={v.title} className='flex flex-col items-center text-white rounded-lg bg-[#321E1E] w-[300px] h-[430px] overflow-hidden gap-4'>
            <div className="object-contain overflow-hidden">
              <Image src={v.img} width={400} height={400} alt={v.title} />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className='text text-xl font-bold text-[#d4af37]'>{v.title}</div>
              <div className='text-center text-sm mx-2'>{v.desc}</div>
              <div className=''>
                <span className='p-5'>{v.star}</span>
                <span className='p-5'>{v.review} reviews</span>
              </div>
            </div>
            <button className='bg-[#d4af37] p-2 rounded-full text-[#321E1E] font-bold border-dashed border border-white'>View More</button>
          </div>
                ))}
        </div>


    </div>
    </>
  )
}

export default Venue
