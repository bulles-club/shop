import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsItem({ label, value, link }) {
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
            <Box component="span">
              {link ? (
                <Link component={RouterLink} href={link} color="inherit" underline="always">
                  {value}
                </Link>
              ) : (
                <>{value}</>
              )}
            </Box>
          </Stack>
        </Stack>
      )}
    </>
  );
}

EcommerceProductDetailsItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  link: PropTypes.string,
};
