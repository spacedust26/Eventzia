"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EventHistory = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/getCartData", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setEvents(data.data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCartData();
  }, []);

  return (
    <div className='container bg-[#321E1E] p-[20px] rounded-lg text-white'>
            <h3 className='text-2xl font-bold text-center mb-5 text-[#d4af37]'>List Of Events</h3>
      <table className='table w-full'>
        <thead>
          <tr>
            <td className='p-[10px]'>Event Name</td>
            <td className='p-[10px]'>Event Date</td>
            <td className='p-[10px]'>Total Amount</td>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <tr key={event._id}>
                <td className='p-[10px]'><div className='user flex gap-2 items-center flex-row'>{event.eventName}</div></td>
                <td className='p-[10px]'>{event.date.substring(0, 10)}</td> {/* Format the date here */}
                <td className='p-[10px]'>Rs {event.totalAmount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className='p-[10px] text-center'>No events found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default EventHistory
