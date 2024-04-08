import PropTypes from 'prop-types';
import { Hits } from 'react-instantsearch';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import EcommerceProductViewListItem from '../item/ecommerce-product-view-list-item';
import EcommerceProductViewGridItem from '../item/ecommerce-product-view-grid-item';

// ----------------------------------------------------------------------

export default function EcommerceProductList({ loading, viewMode, paging = true }) {
  return (
    <>
      {viewMode === 'grid' ? (
        <Hits
          hitComponent={({ hit }) => <EcommerceProductViewGridItem product={hit} />}
          classNames={{
            root: 'hits-gridview',
            list: 'hits-gridview-list',
            item: 'hits-gridview-list-item',
          }}
        />
      ) : (
        <Hits
          hitComponent={({ hit }) => <EcommerceProductViewListItem product={hit} />}
          classNames={{
            root: 'hits-listview',
            list: 'hits-listview-list',
            item: 'hits-listview-list-item',
          }}
        />
      )}

      {/* <Stack spacing={4}> */}

      {paging && (
        <Pagination
          count={10}
          color="primary"
          sx={{
            mt: 10,
            mb: 5,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}

EcommerceProductList.propTypes = {
  loading: PropTypes.bool,
  viewMode: PropTypes.string,
  paging: PropTypes.bool,
};
