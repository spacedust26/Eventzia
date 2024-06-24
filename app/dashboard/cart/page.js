"use client"
import { CartContext } from '@/app/lib/CartContext';
import React, { useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

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
  const { cartProducts, removeProduct, addProduct, clearCart } = useContext(CartContext);
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

  function increaseProduct(id) {
    addProduct(id);
  }

  function decreaseProduct(id) {
    removeProduct(id);
    toast.success('Booking Cancelled!')
  }
  function deleteCart(id) {
    clearCart();
    toast.success('Cart cleared!!')
  }

  return (
    <div className='flex justify-between max-md:flex-col space-x-4'>
      <div className="md:w-2/3 px-4">
        <div className="mt-16 md:mt-6">

          <header className='text-center flex justify-between w-full'>
            <h1 className='text-xl font-bold text-[#321E1E] sm:text-3xl'>Your Bookings</h1>
          </header>
          {console.log('the lenght of the produts is' , products.length)}
          {!products.length ? (
            <p className='my-6 text-center bg-[#321E1E] p-4 text-white rounded-lg'>Your Cart Is Empty</p>
          ) : (
            <>
              {products?.length > 0 && products.map((product) => (
                <div className="mt-2" key={product._id}>
                  <ul className='space-y-4'>
                    <li className='flex items-center gap-4 justify-between'>
                      <div className="bg-[#321E1E] p-4 text-white rounded-lg flex flex-row gap-8 items-center w-11/12 justify-around">
                        <div className="w-1/2">
                          <h3 className='text-[#d4af37]'>{product.category}</h3>
                          <p className='text-sm'>{product.title} | {product.address}</p>
                        </div>
                        <div className="text-sm">
                          <p>{product.hall}</p>
                          <p>{product.time}</p>
                        </div>
                        <div>Rs {formatPrice(cartProducts.filter(id => id === product._id).length * product.price)}</div>
                        <div>
                          <label htmlFor="Quantity" className="sr-only"> Quantity </label>
                          <div className="flex items-center gap-1">
                            <button type="button" className="w-6 h-6 leading-4 text-text transition hover:opacity-75 border" onClick={() => decreaseProduct(product._id)} > -</button>
                            <input type="number" id="Quantity" value={cartProducts.filter(id => id === product._id).length}
                              className="h-7 w-8 rounded border border-secondary text-primary font-bold text-center [-moz-appearance:_textfield] sm:text-md [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none text-black bg-[#d4af37]" readOnly />
                            <button type="button" className="w-6 h-6 leading-4 text-text transition hover:opacity-75 border" onClick={() => increaseProduct(product._id)}>+</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </>
          )}




          <div className="mt-8 flex justify-end border-t border-[#321E1E] pt-8 w-11/12">
            <div className=" max-w-md space-y-4">
              <dl className="space-y-0.5 text-md text-gray-700">
                <div className="flex justify-end text-[#321E1E] border-b mb-3">
                  <button className='bg-[#d4af37] p-1 font-bold rounded-lg' onClick={() => deleteCart()}>Clear Cart</button>

                </div>
                {/* <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>Ksh. {formatPrice(total)}</dd>
                </div>

                <strike className="flex justify-between">
                  <dt>VAT</dt>
                  <dd>ksh. {formatPrice(total / 1000)}</dd>
                </strike>

                <div className="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>Ksh. {formatPrice(total)}</dd>

                </div> */}
              </dl>
            </div>
          </div>

        </div>
      </div>
      <div className="md:w-1/3 mt-16 md:mt-6">
        <p>Checkout</p>
      </div>
    </div>
  );
};

export default Cart;
