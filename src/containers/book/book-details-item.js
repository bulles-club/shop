import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

export default function BookDetailsItem({ label, value }) {
  return (
    <>
      {value && (
        <Stack spacing={2}>
          <Stack
            spacing={0.5}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ sm: 'center' }}
            sx={{ typography: 'body2' }}
          >
            <Box component="span" sx={{ width: 160, color: 'text.secondary' }}>
              {label}
            </Box>
            <Box component="span">{value}</Box>
          </Stack>
        </Stack>
      )}
    </>
  );
}

BookDetailsItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};
