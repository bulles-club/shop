import { useLocalStorage } from './use-local-storage';

// ----------------------------------------------------------------------

export default function useCart() {
  const { state, update } = useLocalStorage('cart', { books: [] });
  //   const me = useMe();
  //   const { data } = useStrapiQuery(GET_CART, { id: me?.cart.data.id }, true);
  //   const [setCart] = useStrapiMutation(SET_CART);

  //   useEffect(() => {
  //     if (data) {
  //       console.log('updating state');
  //       update('id', data.cart.data.id);
  //       update(
  //         'books',
  //         data.cart.data.attributes.books.data.map((book) => ({
  //           id: book.id,
  //           coverUrl: book.attributes.Images.data[0].attributes.url,
  //           name: book.attributes.Title,
  //           author: book.attributes.ScriptWriters.data[0].attributes.Name,
  //         }))
  //       );
  //     }
  //   }, [data, update]);

  const addBook = (id, name, coverUrl, author) => {
    const newBooks = state.books.concat([{ id, coverUrl, name, author }]);
    // setCart({ variables: { id: state.id, books: newBooks.map((book) => book.id) } });
    update('books', newBooks);
  };
  const removeBook = (id) => {
    const newBooks = state.books.filter((book) => book.id !== id);
    // setCart({ variables: { id: state.id, books: newBooks.map((book) => book.id) } });
    update('books', newBooks);
  };
  return { cart: state, addBook, removeBook };
}
