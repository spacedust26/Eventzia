import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const add = () => {
  return (
    <div className='container bg-[#321E1E] p-8 rounded-lg mt-[20px] text-white mb-12'>
      <form className='form flex flex-col gap-8' action=''>
        <div className="flex flex-col gap-2">
          <label htmlFor='eventname' className='text-[#d4af37]'>Hey! What event are you planning ?</label>
          <input className='p-2 bg-transparent border border-[#503C3C] rounded-lg w-full' type='text' placeholder='Enter the name of the event' name='eventname' required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor='date' className='text-[#d4af37]'>When do you plan to host the event ?</label>
          <input type='date' id='date' name='date' className='block px-3 py-2 border border-[#321E1E] rounded-md shadow-sm focus:outline-none focus:ring-[#d4af37] focus:border-[#d4af37] sm:text-sm bg-[#503C3C] text-gray-300' />
        </div>
        <div className="flex items-center justify-center">
          <button className='category p-3 bg-[#d4af37] rounded-lg text-[#321E1E] w-fit cursor-default font-bold'>Select Category</button>
        </div>

        <div className='flex flex-row flex-wrap justify-center'>
          <Link href="/dashboard/createEvent/add/venue"><div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/venue.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Venue, Hotels & Banquet Halls</h4>
          </div></Link>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/food.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Caterers & Food Services</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/photo.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Photographers & Videographers</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/decor.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Decorators and Florists</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/makeup.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Bridal Makeup & Hair</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/mehendi.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Mehendi Artists</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/cake.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Cakes</h4>
          </div><div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/invitation.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Invitation Cards</h4>
          </div><div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/dance.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Entertainment - Music, Band, Dance, Choreographers, Sound System </h4>
          </div><div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/lightings.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Lightings</h4>
          </div>

          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/stalls.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Stalls & Exhibition</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/jewellery.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Jewellery</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/bridal-wear.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Clothing & Fashion Designers</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/cars.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Vintage and Rental Cars</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/priest.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Priests & Clergy</h4>
          </div>
          <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5'>
            <Image src="/category/funeral.png" width={195} height={120} alt='' className='object-cover rounded-t-lg overflow-hidden' />
            <h4 className='text-white p-4 w-48 text-center'>Funeral Survices</h4>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor='desc' className='text-[#d4af37]'>Notes to self</label>
          <textarea type="text" name='desc' id='desc' rows="8" placeholder='Write down important notes to refer later' className='p-3 bg-transparent border border-[#503C3C] rounded-lg' />
        </div>
        <button type='submit' className='p-5 bg-[#d4af37] rounded-lg text-[#321E1E] font-bold'>Check Out</button>
      </form>
    </div>
  )
}

export default add
