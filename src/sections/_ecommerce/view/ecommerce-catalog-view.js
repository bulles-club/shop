'use client';

import EcommerceProductsView from './ecommerce-products-view';

// ----------------------------------------------------------------------

export default function EcommerceCatalogView() {
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
