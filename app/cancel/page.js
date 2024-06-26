"use client"
import React from 'react'
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from 'next/link';

const Cancel = () => {
  return (
    <div className='heading' style={{ textAlign: 'center' }}>
      <pre style={{ fontSize: '2rem' }}>
        <strong>OOPS</strong>
        <p style={{ fontSize: '1rem' }}>Booking Unsucessfull</p>
        <div className="d-grid gap-2">
          <Link href={"/dashboard"} className='text-sm flex flex-row items-center gap-5 justify-center'>
            <span>GO BACK</span>
            <span><RiArrowGoBackFill /></span>
          </Link>
        </div>
      </pre>
    </div>
  )
}

export default Cancel