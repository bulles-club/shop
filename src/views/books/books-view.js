'use client';

import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { SortBy, Configure } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSearchClient } from 'src/hooks/use-search-client';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';

import Filters from './filters/filters';
import BookSearchResults from './results/book-search-results';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'list', icon: <Iconify icon="carbon:list-boxes" /> },
  { value: 'grid', icon: <Iconify icon="carbon:grid" /> },
];

// ----------------------------------------------------------------------

export default function BookView({
  title,
  header,
  productsViewMode = 'grid',
  facets = null,
  showViewAndSortOptions = false,
  filters = '',
  paging,
}) {
  const mobileOpen = useBoolean();
  const searchClient = useSearchClient();
  const settings = useSettingsContext();

  const [sort, setSort] = useState('latest');

  const handleChangeViewMode = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      settings.onChangeBookSearchViewMode(newAlignment);
    }
  }, []);

  const handleChangeSort = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  return (
    <InstantSearchNext
      searchClient={searchClient}
      indexName="books_latest"
      future={{
        preserveSharedStateOnUnmount: true,
      }}
    >
      <Configure analytics={false} facetFilters={filters} hitsPerPage={12} />
      <Container>
        {title && (
          <Typography variant="h3" sx={{ mb: 2 }}>
            {title}
          </Typography>
        )}
        <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ pb: 2 }}>
          {facets && (
            <Button
              color="inherit"
              variant="contained"
              startIcon={<Iconify icon="carbon:filter" width={18} />}
              onClick={mobileOpen.onTrue}
              sx={{
                display: { md: 'none' },
              }}
            >
              Filtres
            </Button>
          )}
        </Stack>
        <Stack
          direction={{
            xs: 'column-reverse',
            md: 'row',
          }}
          sx={{ mb: { xs: 8, md: 10 } }}
        >
          {facets && (
            <Stack spacing={5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
              <Filters open={mobileOpen.value} onClose={mobileOpen.onFalse} facets={facets} />
            </Stack>
          )}

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${280}px)` },
            }}
          >
            {header && (
              <Stack spacing={2} sx={{ mt: 2, mb: 7 }}>
                {header}
              </Stack>
            )}

            {showViewAndSortOptions && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 2 }}
              >
                <ToggleButtonGroup
                  exclusive
                  size="small"
                  value={settings.bookSearchViewMode}
                  onChange={handleChangeViewMode}
                  sx={{ borderColor: 'transparent' }}
                >
                  {VIEW_OPTIONS.map((option) => (
                    <ToggleButton key={option.value} value={option.value}>
                      {option.icon}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>

                <SortBy
                  items={[
                    { label: 'Publication (croissant)', value: 'books_oldest' },
                    { label: 'Publication (décroissant)', value: 'books_latest' },
                  ]}
                  classNames={{
                    root: 'sortby-root',
                    select: 'sortby-select',
                    option: 'sortby-option',
                  }}
                />
              </Stack>
            )}

            <BookSearchResults viewMode={settings.bookSearchViewMode} paging={paging} />
          </Box>
        </Stack>
      </Container>
    </InstantSearchNext>
  );
}

BookView.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  facets: PropTypes.array,
  showViewAndSortOptions: PropTypes.bool,
  productsViewMode: PropTypes.string,
  filters: PropTypes.array,
  paging: PropTypes.bool,
};
