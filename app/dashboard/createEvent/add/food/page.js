import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from 'next/link';
import Star from '@/components/dashboard/Star';

const venue = [
  {
    img: '/category/food/img1.jpg',
    title: 'Delicious Delights Catering',
    desc: '123 Catering Court, Foodville, Gourmet City',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },

  {
    img: '/category/food/img2.jpg',
    title: 'Gourmet Gatherings Catering',
    desc: '456 Banquet Boulevard, Feastville, Culinary Corner',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },

  {
    img: '/category/food/img3.jpeg',
    title: 'Exquisite Eats',
    desc: '234 Cuisine Avenue, Gastronomy Gardens, Gourmetville',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/food/img4.jpg',
    title: 'Epicurean Events Catering',
    desc: '567 Savory Street, Cuisine Cove, Flavorville',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/food/img5.jpg',
    title: 'Taste Temptations Catering',
    desc: '101 Palate Parkway, Foodie Paradise, Gourmet Bay',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/food/img6.jpg',
    title: 'Culinary Creations Catering',
    desc: '222 Dish Drive, Culinary Corner, Flavor Bay',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/food/img7.jpg',
    title: 'Serenity Gardens Event Space',
    desc: '567 Tranquil Terrace, Zen City, Peaceville',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/food/img8.jpg',
    title: 'Savor the Flavor Catering',
    desc: '789 Taste Street, Foodie Heights, Flavor Town',
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
      <h1 className='text-3xl font-bold text-[#321E1E]'>Caterers & Food Services</h1>


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
              <Star stars = {v.star} reviews = {v.review} />
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
