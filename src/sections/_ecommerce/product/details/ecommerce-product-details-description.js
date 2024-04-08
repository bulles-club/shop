import PropTypes from 'prop-types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsDescription({ description }) {
  return (
    <Stack
      spacing={4}
      sx={{
        py: { xs: 5, md: 5 },
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6"> Description </Typography>
        <BlocksRenderer content={description} />
      </Stack>
    </Stack>
  );
}

EcommerceProductDetailsDescription.propTypes = {
  description: PropTypes.array,
};
