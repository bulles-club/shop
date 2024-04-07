import useLocalStorageState from './use-local-storage-state';

// ----------------------------------------------------------------------

export default function useCart() {
  const { current, setItemValue } = useLocalStorageState('cart', []);

  const updateBooksInCart = (newBooks) => {
    setItemValue(newBooks);
  };

  const addBook = (id, name, coverUrl, author) => {
    if (!current.reduce((found, book) => (book.id === id ? true : found), false))
      updateBooksInCart(current.concat([{ id, coverUrl, name, author }]));
  };
  const removeBook = (id) => {
    updateBooksInCart(current.filter((book) => book.id !== id));
  };

  return { books: current, addBook, removeBook };
}
