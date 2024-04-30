import PropTypes from 'prop-types';
import { Hits, Pagination } from 'react-instantsearch';

import { buildUrlImage } from 'src/utils/url-builder';

import BookListItem from 'src/components/book-item/book-list-item';
import BookGridItem from 'src/components/book-item/book-grid-item';

// ----------------------------------------------------------------------

export default function BookSearchResults({ viewMode, paging = true }) {
  return (
    <>
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
        <nav>
          <Pagination
            classNames={{
              root: 'pagination-root',
              list: 'pagination-list',
              item: 'pagination-item',
              selectedItem: 'pagination-selectedItem',
              firstPageItem: 'pagination-pagingItem',
              previousPageItem: 'pagination-pagingItem',
              nextPageItem: 'pagination-pagingItem',
              lastPageItem: 'pagination-pagingItem',
              link: 'pagination-link',
              disabledItem: 'pagination-pagingItem-disabled',
            }}
          />
        </nav>
      )}
    </>
  );
}

BookSearchResults.propTypes = {
  viewMode: PropTypes.string,
  paging: PropTypes.bool,
};
