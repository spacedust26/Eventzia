import React from 'react'
import Image from 'next/image'

const venue = [
  {
    img: '/category/venue/img1.jpg',
    title: 'Grand Plaza Ballroom',
    desc: 'An elegant venue located in the heart of the city. Perfect for weddings, galas and corporate events.',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },

  {
    img: '/category/venue/img2.jpg',
    title: 'Sunset Garden Pavilion',
    desc: 'A picturesque outdoor venue surrounded by lush gardens and scenic views. Ideal for outdoor weddings and receptions.',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },

  {
    img: '/category/venue/img3.jpg',
    title: 'Text & Tunes Venue',
    desc: '123 Melody Street, Harmonyville, Cityville',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/venue/img4.jpg',
    title: 'The Artisanal Loft',
    desc: '456 Canvas Avenue, Creativity Corner, Townsville',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/venue/img5.jpeg',
    title: 'The Playful Pavilion',
    desc: '789 Imagination Lane, Wonderland Plaza, Dreamland',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/venue/img6.jpg',
    title: 'Elegant Eats Banquet Hall',
    desc: '234 Gourmet Avenue, Culinary Center, Foodtown',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/venue/img7.jpg',
    title: 'Serenity Gardens Event Space',
    desc: '567 Tranquil Terrace, Zen City, Peaceville',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
  {
    img: '/category/venue/img8.jpg',
    title: 'The Crystal Palace',
    desc: '101 Diamond Avenue, Gemstone Plaza, Sparkle City',
    star: '4.5',
    review: '20',
    viewmore: '/',
  },
]

const Venue = () => {
  return (
    <div className='flex flex-col justify-center items-center m-8 gap-8'>
      <h1 className='text-3xl font-bold text-[#321E1E]'>Venue</h1>


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
  )
}

export default Venue
