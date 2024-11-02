import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext({
  cart: [],
  addProd: () => {},
  removeProd: () => {},
  cartQuan: () => 0,
  clearCart: () => {},
  total: () => 0,
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProd = (product, quantity) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeProd = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const cartQuan = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const contextValue = {
    cart,
    addProd,
    removeProd,
    cartQuan,
    clearCart,
    total,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};