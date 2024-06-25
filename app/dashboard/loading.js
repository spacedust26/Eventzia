"use client"
import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

const loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <BallTriangle
        height={60}
        width={60}
        radius={3}
        color="#321E1E"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default loading;