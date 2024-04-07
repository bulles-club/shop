'use client';

import PropTypes from 'prop-types';
import { useMemo, useState, useCallback } from 'react';

import { useLocalStorage } from 'src/hooks/use-local-storage';

import { CartContext } from './cart-context';

// ----------------------------------------------------------------------

const STORAGE_KEY = 'cart';

export function CartProvider({ children }) {
  const { state, update } = useLocalStorage(STORAGE_KEY, {});

  const [openDrawer, setOpenDrawer] = useState(false);

  // Drawer
  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const memoizedValue = useMemo(
    () => ({
      ...state,
      onUpdate: update,
      // Drawer
      open: openDrawer,
      onToggle: onToggleDrawer,
      onClose: onCloseDrawer,
    }),
    [onCloseDrawer, onToggleDrawer, openDrawer, state, update]
  );

  return <CartContext.Provider value={memoizedValue}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node,
};
