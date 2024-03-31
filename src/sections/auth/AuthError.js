'use client';

import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const AuthError = ({ error, setError = () => {} }) => {
  const [open, setOpen] = useState(Boolean(true));

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;

    setOpen(Boolean(false));
    setError({});
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error?.message}
      </Alert>
    </Snackbar>
  );
};

AuthError.propTypes = {
  error: PropTypes.object,
  setError: PropTypes.func,
};

export default AuthError;
