import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceAccountAddress({ address }) {
  const { label, line1, line2, postalCode, isDefault, city, country } = address;

  const [open, setOpen] = useState(null);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  return (
    <>
      <Stack
        spacing={3}
        sx={{
          p: 3,
          pr: 1,
          borderRadius: 2,
          border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }}
      >
        <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle1' }}>
          <Stack direction="row" alignItems="center" flexGrow={1}>
            <Box component="span">{label}</Box>

            {isDefault && (
              <Label color="info" startIcon={<Iconify icon="carbon:star-filled" />} sx={{ ml: 1 }}>
                Défaut
              </Label>
            )}
          </Stack>

          <IconButton onClick={handleOpen}>
            <Iconify icon="carbon:overflow-menu-vertical" />
          </IconButton>
        </Stack>

        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Adresse 1
          </Typography>
          <Typography variant="subtitle2"> {line1} </Typography>
        </Stack>

        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Adresse 2
          </Typography>
          <Typography variant="subtitle2"> {line2} </Typography>
        </Stack>

        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
          <Stack spacing={0.5}>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Code postal
            </Typography>
            <Typography variant="subtitle2"> {postalCode} </Typography>
          </Stack>
          <Stack spacing={0.5}>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Ville
            </Typography>
            <Typography variant="subtitle2"> {city} </Typography>
          </Stack>
        </Box>

        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Pays
          </Typography>
          <Typography variant="subtitle2"> {country} </Typography>
        </Stack>
      </Stack>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem disabled={isDefault} onClick={handleClose}>
          <Iconify icon="carbon:star-filled" sx={{ mr: 1 }} /> Définir comme adresse par défaut
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Iconify icon="carbon:edit" sx={{ mr: 1 }} /> Modifier
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed', mt: 0.5 }} />

        <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
          <Iconify icon="carbon:trash-can" sx={{ mr: 1 }} /> Supprimer
        </MenuItem>
      </Popover>
    </>
  );
}

EcommerceAccountAddress.propTypes = {
  address: PropTypes.shape({
    label: PropTypes.string,
    line1: PropTypes.string,
    line2: PropTypes.string,
    postalCode: PropTypes.string,
    isDefault: PropTypes.bool,
    city: PropTypes.string,
    country: PropTypes.string,
  }),
};
