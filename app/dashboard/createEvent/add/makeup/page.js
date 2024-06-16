import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from 'next/link';

const venue = [
  {
    img: '/category/makeup/img1.jpg',
    title: 'Glamour Glow Makeup Studio',
    desc: '123 Radiant Road, Beautyville, Glam City',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },

  {
    img: '/category/makeup/img2.jpg',
    title: 'Elegantcia',
    desc: '456 Blossom Boulevard, Bridal Bliss, Beauty Bay',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },

  {
    img: '/category/makeup/img3.jpg',
    title: 'Radiant Makeup Artistry',
    desc: '456 Festivity Boulevard, Festoon Town, California, 90210',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/makeup/img4.jpg',
    title: 'Enchanter Bridal Makeup',
    desc: '789 Celebration Street, Partyville, CA, 90210',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/makeup/img5.jpg',
    title: 'Pearl Perfection Bridal Makeup',
    desc: '101 Festival Lane, Jubilee Junction, 90210',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/makeup/img6.jpg',
    title: 'Bridal Bliss Beauty Boutique',
    desc: '1111 Party Plaza, Festive Village, 90210, USA',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/makeup/img7.jpg',
    title: 'Dreamy Day Bridal Makeup',
    desc: '2222 Celebration Circle, Merriment City, CA, USA',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/makeup/img8.jpg',
    title: 'Forever Makeup',
    desc: '3333 Festivity Road, Merrymaking Town, California, USA',
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
      <h1 className='text-3xl font-bold text-[#321E1E]'>Bridal Makeup & Hair</h1>


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
