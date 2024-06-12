import React from 'react'
import Card from '@/components/dashboard/Card'
import EventHistory from '@/components/dashboard/EventHistory'
import Charts from '@/components/dashboard/Charts'
import RightBar from '@/components/dashboard/RightBar'

const Dashboard = () => {
  return (
    <div className='wrapper flex gap-[20px] mt-[20px]'>
      <div className="main flex-3 flex flex-col gap-[20px]">
        <div className="cards flex gap-[20px] justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <EventHistory />
        <Charts />
      </div>
      <div className="side flex-1">
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard
