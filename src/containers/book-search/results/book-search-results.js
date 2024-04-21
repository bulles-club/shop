import PropTypes from 'prop-types';
import { Hits } from 'react-instantsearch';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import BookSearchResultsListItem from './book-search-results-list-item';
import BookSearchResultsGridItem from './book-search-results-grid-item';

// ----------------------------------------------------------------------

export default function BookSearchResults({ viewMode, paging = true }) {
  return (
    <>
      {viewMode === 'grid' ? (
        <Hits
          hitComponent={({ hit }) => <BookSearchResultsGridItem book={hit} />}
          classNames={{
            root: 'hits-gridview',
            list: 'hits-gridview-list',
            item: 'hits-gridview-list-item',
          }}
        />
      ) : (
        <Hits
          hitComponent={({ hit }) => <BookSearchResultsListItem book={hit} />}
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

BookSearchResults.propTypes = {
  viewMode: PropTypes.string,
  paging: PropTypes.bool,
};
