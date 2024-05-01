import PropTypes from 'prop-types';
import { useStats, Pagination as AlgoliaPagination } from 'react-instantsearch';

// ----------------------------------------------------------------------

export default function Pagination({ paging = true }) {
  const { nbPages } = useStats();
  return (
    <>
      {paging && nbPages > 1 && (
        <nav>
          <AlgoliaPagination
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

Pagination.propTypes = {
  paging: PropTypes.bool,
};
