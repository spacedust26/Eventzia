"use client"
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = () => {
  const [events, setEvents] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/getCartData", { cache: "no-store" });
        if (res.ok) {
          const cartData = await res.json();
          setEvents(cartData.data);
          processData(cartData.data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const processData = (cartData) => {
      const monthlyData = Array.from({ length: 12 }, (_, index) => ({
        month: new Date(2020, index).toLocaleString('default', { month: 'long' }),
        spend: 0,
        totalEvents: 0,
      }));

      cartData.forEach(event => {
        const eventDate = new Date(event.date);
        const monthIndex = eventDate.getMonth();
        monthlyData[monthIndex].spend += event.totalAmount;
        monthlyData[monthIndex].totalEvents += 1;
      });

      setData(monthlyData);
    };

    fetchCartData();
  }, []);

  return (
    <div className='container h-[450px] bg-[#321E1E] p-[20px] rounded-lg mb-10'>
      <h2 className='title font-bold text-gray-200 mb-[20px]'>Monthly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip contentStyle={{background:"#503C3C", border:"none"}} />
          <Legend />
          <Line type="monotone" dataKey="spend" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="totalEvents" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
