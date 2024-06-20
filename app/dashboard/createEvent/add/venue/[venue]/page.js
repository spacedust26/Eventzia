"use client";
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { notFound, usePathname } from 'next/navigation';
import Star from '@/components/dashboard/Star';
import { CartContext } from '@/app/lib/CartContext';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/venue", { cache: "no-store" });
  if (!res.ok) return notFound();
  return res.json();
};

const SingleVenue = () => {
  const pathname = usePathname();
  const venueName = pathname.split("/").pop().replaceAll("_", " ");
  const { addProduct } = useContext(CartContext);

  const [venueData, setVenueData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const venue = await getData();
      const filteredVenue = venue.filter(v => v.title === venueName);
      setVenueData(filteredVenue);
    };

    fetchData();
  }, [venueName]);

  const addItemToCart = (id) => {
    addProduct(id);
    toast.success('Booking successful!');
  };

  if (venueData.length === 0) {
    return <div className="text-white">Venue not found</div>;
  }

  return (
    <>
      <Link href="/dashboard/createEvent/add/venue"><div className='bg-[#321E1E] p-3 w-fit mt-4 rounded-full text-white hover:scale-105 cursor-pointer'><MdOutlineArrowBackIosNew /></div></Link>
      <div className='flex items-center justify-center flex-col m-8 gap-8'>
        {venueData.map((v) => (
          <React.Fragment key={v.id}>
            <div className="top flex items-center justify-start flex-row gap-8 bg-[#321E1E] p-8 text-white rounded-lg">
              <div className="left rounded-lg">
                <Image src={v.img} width={1000} height={1000} alt="image" className='rounded-lg' />
              </div>
              <div className="right flex items-start justify-center flex-col gap-3 w-2/3">
                <span className='title text-3xl text-[#d4af37]'>{v.title}</span>
                <div className="flex flex-col">
                  <span className='text-[#d4af37] font-bold text-lg'>About Us</span>
                  <span class>{v.about}</span>
                </div>
                <div className="flex flex-col">
                  <span className='text-[#d4af37] font-bold text-lg'>Location</span>
                  <span classNa>{v.address}</span>
                </div>
                <div className="flex flex-col">
                  <span className='text-[#d4af37] font-bold text-lg'>Contact us</span>
                  <span>{v.contact}</span>
                  <span>{v.email}</span>
                </div>
                <Star stars={v.star} reviews={v.review} />
                <button
                  className='bg-[#d4af37] text-[#321E1E] font-bold rounded-lg px-4 py-2 hover:bg-[#503C3C] hover:text-[#d4af37] w-full'
                  onClick={() => addItemToCart(v.id)}
                >
                  Book Now
                </button>
              </div>
            </div>


            <div className="bottom flex flex-row gap-8 text-white w-full">
              <div className='left bg-[#321E1E] rounded-lg p-8 flex flex-col gap-5 items-center justify-center'>
                <p className='text-[#d4af37] font-bold text-lg'>Overview</p>
                <div className='flex flex-col gap-3 justify-center text-sm'>
                  <div className="flex flex-col">
                    <span className='text-[#d4af37] font-bold'>Seating Capacity</span>
                    <span>{v.seating}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className='text-[#d4af37] font-bold'>Timing Slots</span>
                    {v.timings.map((timing, index) => (
                      <span key={index}>{timing}</span>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className='text-[#d4af37] font-bold'>Working Since</span>
                    <span>{v.since}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className='text-[#d4af37] font-bold'>Rooms available</span>
                    <span>{v.roomsavailable}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className='text-[#d4af37] font-bold'>Hall pricing</span>
                    <span>{v.avgprice}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className='text-[#d4af37] font-bold'>Cancellation policy</span>
                    <span>{v.cancellation}</span>
                  </div>
                </div>
              </div>


              <div className="right bg-[#321E1E] rounded-lg p-8 flex flex-col gap-3">
                <p className='text-[#d4af37] font-bold text-lg'>Specifications</p>
                {v.specifications.map((timing, index) => (
                  <span key={index} className='text-sm'>{timing}</span>
                ))}
              </div>

            </div>
          </React.Fragment>
        ))
        }
      </div >
    </>
  );
};

export default SingleVenue;
