"use client"
import { CartContext } from '@/app/lib/CartContext';
import React, { useContext, useState, useEffect } from 'react';

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/cart", { cache: "no-store" });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const Cart = () => {
  const { cartProducts, removeProducts, addProducts, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        setProducts(data.products);
      } else {
        console.error('No data found');
      }
    };
    fetchData();
  }, [cartProducts]);

  console.log(products);

  return (
    <div className='flex justify-between max-md:flex-col space-x-4'>
      <div className="md:w-2/3 px-4">
        <div className="mt-16 md:mt-6">
          <header className='text-center flex justify-between w-full'>
            <h1 className='text-xl font-bold text-[#321E1E] sm:text-3xl'>Your Bookings</h1>
          </header>

          {!products.length ? (
            <p className='my-6 text-center'>Your Cart Is Empty</p>
          ) : (
            <>
              {products.map((product) => (
                <div className="mt-2" key={product._id}>
                  <ul className='space-y-4'>
                    <li className='flex items-center gap-4 justify-between'>
                      <div className="bg-[#321E1E] p-4 text-white rounded-lg">
                        <h3 className='text-[#d4af37]'>{product.category}</h3>
                        <h3>{product.title}</h3>
                        <h3>{product.abc}</h3>
                        <h3>{product.hfvu}</h3>
                        
                      </div>
                     
                    </li>
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="md:w-1/3 mt-16 md:mt-6">
        <p>Checkout</p>
      </div>
    </div>
  );
};

export default Cart;
