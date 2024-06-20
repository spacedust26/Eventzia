"use client"
import { CartContext } from '@/app/lib/CartContext';
import React, { useContext } from 'react'

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const cart = () => {
  const { cartProducts, removeProducts, addProducts, clearCart } = useContext(CartContext);
  return (
    <div className='flex justify-between max-md:flex-col space-x-4'>
      <div className="md:w-2/3 px-4">
        <div className="mt-16 md:mt-6">
          <header className='text-center flex justify-between w-full'>
            <h1 className='text-xl font-bold text-[#321E1E] sm:text-3xl'>Your Bookings</h1>
          </header>
        </div>
        <div className="md:1/3 mt-16 md:mt-6">
          <p>Checkout</p>
        </div>
      </div>
    </div>
  )
}

export default cart