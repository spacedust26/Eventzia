"use client"
import React, { useState, useEffect } from 'react';
import { MdSupervisedUserCircle, MdAttachMoney, MdEventNote } from 'react-icons/md';
import Card from './Card';

const CardParent = () => {
  const [events, setEvents] = useState([]);
  const [totalSpend, setTotalSpend] = useState(0);
  const [latestEvent, setLatestEvent] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/getCartData", { cache: "no-store" });
        if (res.ok) {
          const cartData = await res.json();
          setEvents(cartData.data);
          processCartData(cartData.data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const processCartData = (cartData) => {
      let totalSpend = 0;
      let upcomingEvents = cartData.filter(event => new Date(event.date) > new Date());
      let nearestEvent = null;

      cartData.forEach(event => {
        totalSpend += event.totalAmount;
      });

      if (upcomingEvents.length > 0) {
        nearestEvent = upcomingEvents.reduce((prev, current) => {
          return new Date(prev.date) < new Date(current.date) ? prev : current;
        });
      }

      setTotalSpend(totalSpend);
      setLatestEvent(nearestEvent);
    };

    fetchCartData();
  }, []);


  return (
    <div className="dashboard grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card 
      title="Total Events" 
      number={events.length} 
      detail={<span className='positive text-lime-500'>2% increase than previous.</span>} 
      icon={<MdSupervisedUserCircle />} 
    />
    <Card 
      title="Total Spend" 
      number={`₹${totalSpend}`} 
      detail={<span className='positive text-lime-500'>5% increase than previous.</span>} 
      icon={<MdAttachMoney />} 
    />
    {latestEvent && (
      <Card 
        title="Latest Event" 
        number={latestEvent.eventName} 
        detail={`On ${new Date(latestEvent.date).toLocaleDateString()}`} 
        icon={<MdEventNote />} 
      />
    )}
  </div>
);
}

export default CardParent