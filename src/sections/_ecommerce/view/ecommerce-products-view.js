'use client';

import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { Configure } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSearchClient } from 'src/hooks/use-search-client';

import Iconify from 'src/components/iconify';

import EcommerceFilters from '../product/filters/ecommerce-filters';
import EcommerceProductList from '../product/list/ecommerce-product-list';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'list', icon: <Iconify icon="carbon:list-boxes" /> },
  { value: 'grid', icon: <Iconify icon="carbon:grid" /> },
];

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

// ----------------------------------------------------------------------

export default function EcommerceProductsView({
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

  const [sort, setSort] = useState('latest');

  const [viewMode, setViewMode] = useState(productsViewMode);

  const handleChangeViewMode = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setViewMode(newAlignment);
    }
  }, []);

  const handleChangeSort = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  return (
    <InstantSearchNext
      searchClient={searchClient}
      indexName="books"
      future={{
        preserveSharedStateOnUnmount: true,
      }}
    >
      <Configure analytics={false} facetFilters={filters} hitsPerPage={16} />
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            py: 5,
          }}
        >
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
              Filters
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
              <EcommerceFilters
                open={mobileOpen.value}
                onClose={mobileOpen.onFalse}
                facets={facets}
              />
            </Stack>
          )}

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${280}px)` },
            }}
          >
            {title && <Typography variant="h3">{title}</Typography>}

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
                sx={{ mb: 5 }}
              >
                <ToggleButtonGroup
                  exclusive
                  size="small"
                  value={viewMode}
                  onChange={handleChangeViewMode}
                  sx={{ borderColor: 'transparent' }}
                >
                  {VIEW_OPTIONS.map((option) => (
                    <ToggleButton key={option.value} value={option.value}>
                      {option.icon}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>

                <FormControl size="small" hiddenLabel sx={{ width: 120 }}>
                  <Select value={sort} onChange={handleChangeSort}>
                    {SORT_OPTIONS.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            )}

            <EcommerceProductList viewMode={viewMode} paging={paging} />
          </Box>
        </Stack>
      </Container>
    </InstantSearchNext>
  );
}

EcommerceProductsView.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  facets: PropTypes.array,
  showViewAndSortOptions: PropTypes.bool,
  productsViewMode: PropTypes.string,
  filters: PropTypes.array,
  paging: PropTypes.bool,
};
