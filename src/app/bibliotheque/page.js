import EcommerceProductsView from 'src/containers/ecommerce-products-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return {
    title: 'Serie',
  };
}

export const dynamic = 'force-dynamic';

export default function LibraryPage() {
  return (
    <EcommerceProductsView
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
