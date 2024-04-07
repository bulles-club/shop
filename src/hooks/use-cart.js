import useLocalStorageState from './use-local-storage-state';

// ----------------------------------------------------------------------

export default function useCart() {
  const { current, setItemValue } = useLocalStorageState('cart', []);

  const addBook = (id, name, coverUrl, author) => {
    if (!current.reduce((found, book) => (book.id === id ? true : found), false))
      setItemValue(current.concat([{ id, coverUrl, name, author }]));
  };
  const removeBook = (id) => {
    setItemValue(current.filter((book) => book.id !== id));
  };

  return { books: current, addBook, removeBook };
}
