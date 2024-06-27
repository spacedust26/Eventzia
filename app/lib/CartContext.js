"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ cartItems: [] });
  const router = useRouter();

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : { cartItems: [] }
    );
  };

  const addItemToCart = ({
    id,
    category,
    title,
    address,
    stock,
    hall,
    price,
    menu,
    packages,
    quantity = 1
  }) => {
    const item = {
      id,
      category,
      title,
      address,
      stock,
      hall,
      price,
      menu,
      packages,
      quantity
    };

    const isItemExist = cart.cartItems.find((i) => i.id === item.id);

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart.cartItems.map((i) =>
        i.id === isItemExist.id ? item : i
      );
    } else {
      newCartItems = [...cart.cartItems, item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart.cartItems.filter((i) => i.id !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, deleteItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
