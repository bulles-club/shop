import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { RefinementList } from 'react-instantsearch';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import FilterStock from './filter-stock';
import FilterRating from './filter-rating';

// ----------------------------------------------------------------------

const defaultValues = {
  filterBrand: [],
  filterCategories: '',
  filterRating: null,
  filterStock: false,
  filterShipping: [],
  filterTag: [],
  filterPrice: {
    start: 0,
    end: 0,
  },
};

export default function EcommerceFilters({ open, onClose }) {
  const mdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState(defaultValues);

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const handleChangeTag = useCallback(
    (name) => {
      setFilters({
        ...filters,
        filterTag: getSelected(filters.filterTag, name),
      });
    },
    [filters]
  );

  const handleChangeRating = useCallback(
    (event) => {
      setFilters({
        ...filters,
        filterRating: event.target.value,
      });
    },
    [filters]
  );

  const handleChangeStock = useCallback(
    (event) => {
      setFilters({
        ...filters,
        filterStock: event.target.checked,
      });
    },
    [filters]
  );

  const handleClearAll = useCallback(() => {
    setFilters(defaultValues);
  }, []);

  const renderContent = (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 280 },
      }}
    >
      <Block title="Genre">
        <RefinementList attribute="genre" classNames={{ root: 'checkbox-wrapper-13' }} />
      </Block>

      <Block title="Série">
        <RefinementList attribute="series" classNames={{ root: 'checkbox-wrapper-13' }} />
      </Block>

      <Block title="Type">
        <RefinementList attribute="type" classNames={{ root: 'checkbox-wrapper-13' }} />
      </Block>

      <Block title="Age">
        <RefinementList attribute="ageGroup" classNames={{ root: 'checkbox-wrapper-13' }} />
      </Block>

      <Block title="Editeur">
        <RefinementList attribute="publisher" classNames={{ root: 'checkbox-wrapper-13' }} />
      </Block>

      <Block title="Ratings">
        <FilterRating
          filterRating={filters.filterRating}
          onChangeRating={handleChangeRating}
          sx={{ mt: 2 }}
        />
      </Block>

      <FilterStock filterStock={filters.filterStock} onChangeStock={handleChangeStock} />

      <Button
        fullWidth
        color="inherit"
        size="large"
        variant="contained"
        startIcon={<Iconify icon="carbon:trash-can" />}
        onClick={handleClearAll}
      >
        Clear All
      </Button>
    </Stack>
  );

  return (
    <>
      {mdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              pt: 3,
              px: 3,
              width: 280,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

EcommerceFilters.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

// ----------------------------------------------------------------------

function Block({ title, children, ...other }) {
  const contentOpen = useBoolean(true);

  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={contentOpen.onToggle}
        sx={{ width: 1, cursor: 'pointer' }}
      >
        <Typography variant="h6">{title}</Typography>

        <Iconify
          icon={contentOpen.value ? 'carbon:subtract' : 'carbon:add'}
          sx={{ color: 'text.secondary' }}
        />
      </Stack>

      <Collapse unmountOnExit in={contentOpen.value} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
