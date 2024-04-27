import PropTypes from 'prop-types';
import { Hits } from 'react-instantsearch';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { buildUrlImage } from 'src/utils/url-builder';

import BookListItem from 'src/components/book-item/book-list-item';

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
          hitComponent={({ hit }) => (
            <BookListItem
              slug={hit.slug}
              coverUrl={buildUrlImage(hit.coverUrl)}
              title={hit.title}
              description={hit.description}
            />
          )}
          classNames={{
            root: 'hits-listview',
            list: 'hits-listview-list',
            item: 'hits-listview-list-item',
          }}
        />
      )}

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
