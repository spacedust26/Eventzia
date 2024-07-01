"use client";
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/app/lib/CartContext';
import Link from 'next/link';
import axios from 'axios';

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Cart = () => {
  const { cart, addItemToCart, deleteItemFromCart, clearItemFromCart } = useContext(CartContext);
  const [eventDetails, setEventDetails] = useState({
    eventname: "",
    date: "",
    desc: ""
  });

  // Load initial data from local storage
  useEffect(() => {
    const savedEventname = localStorage.getItem('eventname');
    const savedDate = localStorage.getItem('date');
    const savedDesc = localStorage.getItem('desc');

    setEventDetails({
      eventname: savedEventname || "",
      date: savedDate || "",
      desc: savedDesc || ""
    });
  }, []);

  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    if (newQty > Number(cartItem.stock)) return;
    const item = { ...cartItem, quantity: newQty };
    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    if (newQty <= 0) return;
    const item = { ...cartItem, quantity: newQty };
    addItemToCart(item);
  };

  const amountWithoutTax = cart?.cartItems?.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const taxAmount = (amountWithoutTax * 0.05).toFixed(2);
  const totalAmount = (Number(amountWithoutTax) + Number(taxAmount));

  const createCheckoutSession = () => {
    //stripe payment
    axios.post('/api/checkout_sessions', { cartItems: cart.cartItems.map(item => ({ ...item, priceId: item.productId })) })
      .then(res => {
        console.log('Stripe session created:', res);
        window.location = res.data.sessionURL;
      })
      .catch(err => {
        console.error('Error creating checkout session:', err);
      });
  };

  const saveCartData = async () => {
    try {
      const cartData = {
        date: eventDetails.date,
        eventName: eventDetails.eventname,
        desc: eventDetails.desc,
        totalAmount: totalAmount,
        item_info: cart.cartItems
      };
      console.log(cartData);
      
      const response = await axios.post('/api/saveCart', cartData);
      
      if (response.data.success) {
        console.log('Cart saved successfully:', response.data.data);
        localStorage.removeItem('eventname');
        localStorage.removeItem('date');
        localStorage.removeItem('desc');
        localStorage.removeItem('item_info');
        clearItemFromCart();
      } else {
        console.error('Error saving cart:', response.data.error);
      }
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  const handleContinueClick = async () => {
    await createCheckoutSession();
    await saveCartData();
    clearItemFromCart();
    localStorage.removeItem('eventname');
    localStorage.removeItem('date');
    localStorage.removeItem('desc');
    localStorage.removeItem('item_info');
  }

  return (
    <div className='flex justify-between max-md:flex-col space-x-4'>
      <div className="md:w-2/3 px-4">
        <div className="mt-16 md:mt-6">
          <header className='text-center flex items-center justify-start w-full flex-row gap-3'>
            <h1 className='text-xl font-bold text-[#321E1E] sm:text-3xl'>Your Bookings</h1>
            <p className='font-bold text-[#321E1E]'>{cart?.cartItems?.length || 0} Item(s) in Cart</p>
          </header>

          {cart?.cartItems?.length > 0 && (
            <>
              {cart.cartItems.map((cartItem) => (
                <div className="mt-2" key={cartItem.id}>
                  <ul className='space-y-4'>
                    <li className='flex items-center gap-4 justify-between'>
                      <div className="bg-[#321E1E] p-4 text-white rounded-lg flex flex-row gap-8 items-center w-[1000px] justify-around">
                        <div className="w-[300px]">
                          <h3 className='text-[#d4af37]'>{cartItem.category}</h3>
                          <p className='text-sm'>{cartItem.title} | {cartItem.address}</p>
                        </div>
                        <div className="text-sm">
                          <p>{cartItem.hall}</p>
                          <p>{cartItem.time}</p>
                          <p>{cartItem.packages}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div>Rs {formatPrice(cartItem.price * cartItem.quantity)}</div>
                          <div className='text-sm'>(Rs {formatPrice(cartItem.price)} / per item)</div>
                        </div>
                        <div>
                          <label htmlFor="Quantity" className="sr-only"> Quantity </label>
                          <div className="flex items-center gap-1">
                            <button type="button" className="w-6 h-6 leading-4 text-text transition hover:opacity-75 border" onClick={() => decreaseQty(cartItem)}> - </button>
                            <input type="number" id="Quantity" value={cartItem.quantity}
                              className="h-7 w-8 rounded border border-secondary text-primary font-bold text-center [-moz-appearance:_textfield] sm:text-md [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none text-black bg-[#d4af37]" readOnly />
                            <button type="button" className="w-6 h-6 leading-4 text-text transition hover:opacity-75 border" onClick={() => increaseQty(cartItem)}> + </button>
                            <button className='text-[#d4af37] text-center p-1 font-bold rounded-lg' onClick={() => deleteItemFromCart(cartItem.id)}>Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <aside className="md:w-1/4 m-8">
        <article className="bg-[#321E1E] shadow-sm rounded mb-5 p-3 lg:p-5">
          <div className="mb-5 text-white">
            <h2 className='text-lg font-bold mb-3'>Event Details</h2>
            <p><strong>Event Name:</strong> {eventDetails.eventname}</p>
            <p><strong>Date:</strong> {eventDetails.date}</p>
            <p><strong>Notes:</strong> {eventDetails.desc}</p>
          </div>
          <ul className="mb-5">
            <li className="flex justify-between text-white mb-1">
              <span>Amount before Tax:</span>
              <span>Rs {formatPrice(amountWithoutTax)}</span>
            </li>
            <li className="flex justify-between text-white mb-1">
              <span>Total Units:</span>
              <span className="text-[#d4af37]">
                {cart?.cartItems?.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                )}{" "}
                (Units)
              </span>
            </li>
            <li className="flex justify-between text-white mb-1">
              <span>TAX:</span>
              <span>Rs {formatPrice(taxAmount)}</span>
            </li>
            <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3 text-[#d4af37]">
              <span>Total price:</span>
              <span>Rs {formatPrice(totalAmount)}</span>
            </li>
          </ul>

          <a className="py-1 px-2 mb-2 inline-block w-fit text-center font-medium text-[#321E1E] bg-[#d4af37] hover:bg-[#e1ba43] cursor-pointer" onClick={handleContinueClick}>
            Continue
          </a>

          <Link
            href="/dashboard/createEvent"
            className="py-1 px-2 inline-block w-fit text-center font-medium text-[#d4af37] shadow-sm hover:underline"
          >
            Back to shop
          </Link>
        </article>
      </aside>
    </div>
  );
};

export default Cart;
