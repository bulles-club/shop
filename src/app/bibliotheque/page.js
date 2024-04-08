'use client';

import EcommerceProductsView from 'src/sections/_ecommerce/view/ecommerce-products-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Serie',
};

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
