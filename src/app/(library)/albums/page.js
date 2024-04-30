import { TITLE_SUFFIX } from 'src/services/seo';
import BooksView from 'src/views/books/books-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return {
    title: `Albums${TITLE_SUFFIX}`,
  };
}

export const dynamic = 'force-dynamic';

export default function LibraryPage() {
  return (
    <BooksView
      showViewAndSortOptions
      facets={[
        { label: 'Genre', name: 'genre' },
        { label: 'Age', name: 'ageGroup' },
        { label: 'Editeur', name: 'publisher' },
      ]}
    />
  );
}
