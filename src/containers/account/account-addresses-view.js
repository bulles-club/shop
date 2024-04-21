'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { _mock } from 'src/_mock';

import EcommerceAccountAddress from '../../sections/_ecommerce/account/ecommerce-account-address';
import EcommerceAccountNewAddressForm from '../../sections/_ecommerce/account/ecommerce-account-new-address-form';

// ----------------------------------------------------------------------

const ADDRESSES = [
  {
    id: _mock.id(1),
    isDefault: true,
    label: 'Maison',
    line1: 'calle Sicilia 236',
    line2: 'Entresuelo 1A',
    postalCode: '08013',
    city: 'Barcelona',
    country: 'France',
  },
  {
    id: _mock.id(2),
    isDefault: false,
    label: 'Bureau',
    line1: 'calle Sicilia 236',
    line2: 'Entresuelo 1A',
    postalCode: '08013',
    city: 'Barcelona',
    country: 'France',
  },
];

// ----------------------------------------------------------------------

export default function AccountAddressesView() {
  return (
    <Stack spacing={5}>
      <Stack spacing={3}>
        <Typography variant="h5">Carnet d&apos;adresses</Typography>

        <Box gap={3} display="grid" gridTemplateColumns="repeat(1, 1fr)">
          {ADDRESSES.map((address) => (
            <EcommerceAccountAddress key={address.id} address={address} />
          ))}
        </Box>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

      <Stack spacing={3}>
        <Typography variant="h5">Ajouter une nouvelle adresse</Typography>

        <EcommerceAccountNewAddressForm />

        <Button color="inherit" size="large" variant="contained" sx={{ alignSelf: 'flex-end' }}>
          Enregistrer
        </Button>
      </Stack>
    </Stack>
  );
}
