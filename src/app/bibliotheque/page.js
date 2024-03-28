import EcommerceCatalogView from 'src/sections/_ecommerce/view/ecommerce-catalog-view';
// ----------------------------------------------------------------------

export const metadata = {
  title: 'Serie',
};

export const dynamic = 'force-dynamic';

export default function LibraryPage() {
  return <EcommerceCatalogView />;
}
