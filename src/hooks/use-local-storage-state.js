'use client';

import { useEffect, useCallback, useSyncExternalStore } from 'react';

// ----------------------------------------------------------------------

const isFunction = (value) => typeof value === 'function';

const dispatchStorageEvent = (key, newValue) =>
  window.dispatchEvent(new StorageEvent('storage', { key, newValue }));

const getLocalStorageItem = (key) => window.localStorage.getItem(key);

const setLocalStorageItem = (key, value) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeLocalStorageItem = (key) => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const localStorageSubscribe = (cb) => {
  window.addEventListener('storage', cb);
  return () => window.removeEventListener('storage', cb);
};

// ----------------------------------------------------------------------

export default function useLocalStorageState(key, initialValue) {
  const getSnapshot = () => getLocalStorageItem(key);
  const getServerSnapshot = () => initialValue;
  const store = useSyncExternalStore(localStorageSubscribe, getSnapshot, getServerSnapshot);

  const setState = useCallback(
    (v) => {
      try {
        let nextState;
        if (isFunction(v)) {
          const parsedStore = store ? JSON.parse(store) : null;
          nextState = v(parsedStore ?? initialValue);
        } else {
          nextState = v;
        }

        if (nextState === undefined || nextState === null) {
          removeLocalStorageItem(key);
        } else {
          setLocalStorageItem(key, nextState);
        }
      } catch (e) {
        console.error('error setting local storage state', e);
      }
    },
    [key, store, initialValue]
  );

  useEffect(() => {
    if (getLocalStorageItem(key) === null && typeof initialValue !== 'undefined') {
      setLocalStorageItem(key, initialValue);
    }
  }, [key, initialValue]);
  return {
    current: store && store.length > 0 ? JSON.parse(store) : initialValue,
    setItemValue: setState,
    removeItem: () => removeLocalStorageItem(key),
  };
}
