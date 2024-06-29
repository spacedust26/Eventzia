import React from 'react'
import EventHistory from '@/components/dashboard/EventHistory'
import Charts from '@/components/dashboard/Charts'
import RightBar from '@/components/dashboard/RightBar'
import CardParent from '@/components/dashboard/CardParent'

const Dashboard = () => {
  return (
    <div className='wrapper flex gap-[20px] mt-[20px]'>
      <div className="main flex-3 flex flex-col gap-[20px]">
        <div className="cards flex gap-[20px] justify-between">
          <CardParent />
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
