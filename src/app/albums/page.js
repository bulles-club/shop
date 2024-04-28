import BookSearchView from 'src/views/book-search/book-search-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return {
    title: 'Albums',
  };
}

export const dynamic = 'force-dynamic';

export default function LibraryPage() {
  return (
    <BookSearchView
      showViewAndSortOptions
      facets={[
        { label: 'Genre', name: 'genre' },
        { label: 'Type', name: 'type' },
        { label: 'Age', name: 'ageGroup' },
        { label: 'Editeur', name: 'publisher' },
      ]}
    />
  );
}
