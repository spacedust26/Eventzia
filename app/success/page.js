"use client"
import React from 'react';
import Confetti from 'react-confetti';
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from 'next/link';

const Success = () => {
  return (
    <div style={{ backgroundColor: '#321E1E', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Confetti width={1500} height={690} />
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '10px', 
        maxWidth: '80%'
      }}>
        <div className='heading' style={{ textAlign: 'center' }}>
          <pre style={{ fontSize: '2rem' }}>
            <strong>THANK YOU</strong>
            <p style={{ fontSize: '1rem' }}>Booked Successfully</p>
            <div className="d-grid gap-2">
              <Link href={"/dashboard"} className='text-sm flex flex-row items-center gap-5 justify-center'>
              <span>GO BACK</span>
              <span><RiArrowGoBackFill /></span>
              </Link>
            </div>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Success;
