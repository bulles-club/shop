import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

export default function EcommerceAccountNewAddressForm() {
  return (
    <Stack spacing={2.5}>
      <TextField label="Adresse 1" InputLabelProps={{ shrink: true }} />

      <TextField label="Adresse 2" InputLabelProps={{ shrink: true }} />

      <Stack spacing={2} direction="row">
        <TextField fullWidth label="Code postal" InputLabelProps={{ shrink: true }} />
        <TextField fullWidth label="Ville" InputLabelProps={{ shrink: true }} />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        sx={{ typography: 'caption', color: 'text.disabled' }}
      />
    </Stack>
  );
}
