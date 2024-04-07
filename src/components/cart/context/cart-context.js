'use client';

import { useContext, createContext } from 'react';

// ----------------------------------------------------------------------

export const CartContext = createContext({});

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCartContext must be use inside CartProvider');

  return context;
};
