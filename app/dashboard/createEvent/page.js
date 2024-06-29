"use client"
import React, { useState, useEffect } from 'react';
import Search from '@/components/dashboard/Search';
import Link from 'next/link';
import Pagination from '@/components/dashboard/pagination';

const CreateEvent = ({ placeholder }) => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');

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

  const handleDelete = async (id) => {
    try {
      const res = await fetch('/api/deleteEvent', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Send ID in request body
      });
      const data = await res.json();
      if (data.success) {
        // Update state or notify the user about successful deletion
        setEvents(events.filter((event) => event._id !== id));
      } else {
        console.error('Failed to delete event:', data.message);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className='container bg-[#321E1E] p-[20px] rounded-lg mt-[20px] text-white'>
      <div className="top flex items-center justify-between">
        <Search onChange={(e) => setSearch(e.target.value)} placeholder='Search for an event...' />
        <Link href="/dashboard/createEvent/add">
          <button className='addButton p-[10px] text-[#321E1E] border-none rounded-lg cursor-pointer bg-[#d4af37] font-bold w-96'>Create Event</button>
        </Link>
      </div>

      <hr className='m-7 bg-[#503C3C]' />
      <h3 className='text-2xl font-bold text-center mb-5 text-[#d4af37]'>List Of Events</h3>
      <table className='table w-full'>
        <thead>
          <tr>
            <td className='p-[10px]'>Event Name</td>
            <td className='p-[10px]'>Event Date</td>
            <td className='p-[10px]'>Total Amount</td>
            <td className='p-[10px]'>Actions</td>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events
              .filter((item) => {
                return search.toLowerCase() === '' || item.eventName.toLowerCase().includes(search.toLowerCase());
              })
              .map((event) => (
                <tr key={event._id}>
                  <td className='p-[10px]'><div className='user flex gap-2 items-center flex-row'>{event.eventName}</div></td>
                  <td className='p-[10px]'>{event.date.substring(0, 10)}</td>
                  <td className='p-[10px]'>Rs {event.totalAmount}</td>
                  <td className='p-[10px]'>
                    <div className="buttons flex gap-2">
                      <button
                        className='button px-[5px] py-[10px] rounded-lg cursor-pointer delete border-none bg-red-500'
                        onClick={() => handleDelete(event._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan="4" className='p-[10px] text-center'>No events found</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default CreateEvent;
