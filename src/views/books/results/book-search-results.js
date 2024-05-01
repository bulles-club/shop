import PropTypes from 'prop-types';
import { Hits } from 'react-instantsearch';

import { merge } from 'src/utils/arrays';
import { buildUrlImage } from 'src/utils/url-builder';

import BookListItem from 'src/components/book-item/book-list-item';
import BookGridItem from 'src/components/book-item/book-grid-item';

import Pagination from '../pagination/pagination';

// ----------------------------------------------------------------------

export default function BookSearchResults({ viewMode, paging = true }) {
  return (
    <>
      <Pagination paging={paging} />

      {viewMode === 'grid' ? (
        <Hits
          hitComponent={({ hit }) => (
            <BookGridItem
              slug={hit.slug}
              coverUrl={buildUrlImage(hit.coverUrl)}
              title={hit.title}
            />
          )}
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
              authors={merge(hit.scriptWriters, hit.artists)}
            />
          )}
          classNames={{
            root: 'hits-listview',
            list: 'hits-listview-list',
            item: 'hits-listview-list-item',
          }}
        />
      )}

      <Pagination paging={paging} />
    </>
  );
}

BookSearchResults.propTypes = {
  viewMode: PropTypes.string,
  paging: PropTypes.bool,
};
