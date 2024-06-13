import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className='flex flex-row flex-wrap my-5 justify-center'>
      <Link href="/"><div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Venue, Hotels & Banquet Halls</h4>
      </div></Link>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Caterers & Food Services</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Photographers & Videographers</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Decorators and Florists</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Bridal Makeup & Hair</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Mehendi Artists</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Cakes</h4>
      </div><div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Invitation Cards</h4>
      </div><div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Entertainment - Music, Band, Dance, Choreographers, Sound System </h4>
      </div><div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Lightings</h4>
      </div>

      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Stalls & Exhibition</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Jewellery</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Clothing & Fashion Designers</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Vintage and Rental Cars</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Priests & Clergy</h4>
      </div>
      <div className='flex flex-col bg-[#321E1E] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
        <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
        <h4 className='text-white p-4 w-48 text-center'>Funeral Survices</h4>
      </div>
    </div>
  )
}

export default Categories
