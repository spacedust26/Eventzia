"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Add = () => {
  const router = useRouter();
  const [eventname, setEventname] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    const currentDate = new Date();
    const selectedDate = new Date(date);
    const minDate = new Date();
    minDate.setDate(currentDate.getDate() + 10);
    const maxDate = new Date();
    maxDate.setFullYear(currentDate.getFullYear() + 1);

    if (!eventname.trim()) {
      formErrors.eventname = 'Event name is required';
    }
    if (!date) {
      formErrors.date = 'Date is required';
    } else if (selectedDate < minDate || selectedDate > maxDate) {
      formErrors.date = 'Date must be between 10 days from now and 1 year from now';
    }
    if (!desc.trim()) {
      formErrors.desc = 'Description is required';
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      alert('Please fill in all required fields correctly.');
      return;
    }
    console.log('Form submitted with:', { eventname, date, desc });
    router.push("/dashboard/cart");
  };

  useEffect(() => {
    const savedEventname = localStorage.getItem('eventname');
    const savedDate = localStorage.getItem('date');
    const savedDesc = localStorage.getItem('desc');

    if (savedEventname) setEventname(savedEventname);
    if (savedDate) setDate(savedDate);
    if (savedDesc) setDesc(savedDesc);
  }, []);

  useEffect(() => {
    localStorage.setItem('eventname', eventname);
  }, [eventname]);

  useEffect(() => {
    localStorage.setItem('date', date);
  }, [date]);

  useEffect(() => {
    localStorage.setItem('desc', desc);
  }, [desc]);

  return (
    <div className='container bg-[#321E1E] p-8 rounded-lg mt-[20px] text-white mb-12'>
      <form className='form flex flex-col gap-8' onSubmit={handleSubmit}>

        <div className="flex flex-col gap-2">
          <label htmlFor='eventname' className='text-[#d4af37]'>Hey! What event are you planning ?</label>
          <input
            className={`p-2 bg-transparent border border-[#503C3C] rounded-lg w-full ${errors.eventname && 'border-red-500'}`}
            type='text'
            placeholder='Enter the name of the event'
            name='eventname'
            required
            value={eventname}
            onChange={(e) => {
              setEventname(e.target.value);
              setErrors((prevErrors) => ({
                ...prevErrors,
                eventname: ''
              }));
            }}
          />
          {errors.eventname && <p className="text-red-500 text-sm">{errors.eventname}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor='date' className='text-[#d4af37]'>When do you plan to host the event ?</label>
          <input
            type='date'
            id='date'
            name='date'
            className={`block px-3 py-2 border border-[#321E1E] rounded-md shadow-sm focus:outline-none focus:ring-[#d4af37] focus:border-[#d4af37] sm:text-sm bg-[#503C3C] text-gray-300 ${errors.date && 'border-red-500'}`}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setErrors((prevErrors) => ({
                ...prevErrors,
                date: ''
              }));
            }}
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>

        <div className="flex items-center justify-center">
          <button className='category p-3 bg-[#d4af37] rounded-lg text-[#321E1E] w-fit cursor-default font-bold'>Select Category</button>
        </div>
        <div className='flex flex-row flex-wrap justify-center'>
          <Link href="/dashboard/createEvent/add/venue" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/venue.png" width={195} height={120} alt='Venue, Hotels & Banquet Halls' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Venue, Hotels & Banquet Halls</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/food" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/food.png" width={195} height={120} alt='Caterers & Food Services' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Caterers & Food Services</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/photo" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/photo.png" width={195} height={120} alt='Photographers & Videographers' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Photographers & Videographers</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/decor" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/decor.png" width={195} height={120} alt='Decorators and Florists' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Decorators and Florists</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/makeup" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/makeup.png" width={195} height={120} alt='Bridal Makeup & Hair' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Bridal Makeup & Hair</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/mehendi" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/mehendi.png" width={195} height={120} alt='Mehendi Artists' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Mehendi Artists</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/cake" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/cake.png" width={195} height={120} alt='Cakes' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Cakes</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/invitation" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/invitation.png" width={195} height={120} alt='Invitation Cards' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Invitation Cards & Gifts</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/entertainment" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/dance.png" width={195} height={120} alt='Entertainment - Music, Band, Dance, Choreographers, Sound System' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Entertainment - Music, Band, Dance, Choreographers, Sound System</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/lightings" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/lightings.png" width={195} height={120} alt='Lightings' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Lightings & Fireworks</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/stalls" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/stalls.png" width={195} height={120} alt='Stalls & Exhibition' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Stalls & Exhibition</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/jewellery" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/jewellery.png" width={195} height={120} alt='Jewellery' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Jewellery</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/clothing" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/bridal-wear.png" width={195} height={120} alt='Clothing & Fashion Designers' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Clothing & Fashion Designers</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/cars" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/cars.png" width={195} height={120} alt='Vintage and Rental Cars' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Vintage and Rental Cars</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/priest" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/priest.png" width={195} height={120} alt='Priests & Clergy' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Priests & Clergy</h4>
            </div>
          </Link>

          <Link href="/dashboard/createEvent/add/funeral" passHref>
            <div className='flex flex-col bg-[#503C3C] h-[300px] items-center rounded-lg transform transition duration-200 hover:scale-105 m-5 cursor-pointer'>
              <Image src="/category/funeral.png" width={195} height={120} alt='Funeral Services' className='object-cover rounded-t-lg overflow-hidden' />
              <h4 className='text-white p-4 w-48 text-center'>Funeral Services</h4>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor='desc' className='text-[#d4af37]'>Instructions</label>
          <textarea
            type="text"
            name='desc'
            id='desc'
            rows="8"
            placeholder='Write down important notes to refer later'
            className={`p-3 bg-transparent border border-[#503C3C] rounded-lg ${errors.desc && 'border-red-500'}`}
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
              setErrors((prevErrors) => ({
                ...prevErrors,
                desc: ''
              }));
            }}
          />
          {errors.desc && <p className="text-red-500 text-sm">{errors.desc}</p>}
        </div>

        <button type='submit' className='p-5 bg-[#d4af37] rounded-lg text-[#321E1E] font-bold hover:bg-[#e1ba43]' id='go-to-cart'>Go to Booking Cart</button>
      </form>
    </div>
  );
}

export default Add;
