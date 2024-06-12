"use client"
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: "January",
    spend: 4000,
    totalEvents: 1,
  },
  {
    month: "February",
    spend: 0,
    totalEvents: 0,
  },
  {
    month: "March",
    spend: 5000,
    totalEvents: 2,
  },
  {
    month: "April",
    spend: 100000,
    totalEvents: 1,
  },
  {
    month: "May",
    spend: 1000,
    totalEvents: 2,
  },
  {
    month: "June",
    spend: 400000,
    totalEvents: 6,
  },
  {
    month: "July",
    spend: 1000,
    totalEvents: 1,
  },
  {
    month: "August",
    spend: 0,
    totalEvents: 0,
  },
  {
    month: "September",
    spend: 0,
    totalEvents: 0,
  },
  {
    month: "October",
    spend: 4000,
    totalEvents: 3,
  },
  {
    month: "November",
    spend: 10000,
    totalEvents: 3,
  },
  {
    month: "December",
    spend: 25000,
    totalEvents: 2,
  },
]

const Charts = () => {
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
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip contentStyle={{background:"#503C3C", border:"none"}} />
          <Legend /> 
          <Line type="monotone" dataKey="spend" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="totalEvents" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts
