'use client';

import PropTypes from 'prop-types';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// ----------------------------------------------------------------------

export default function LocalizationProvider({ children }) {
  return <MuiLocalizationProvider dateAdapter={AdapterDateFns}>{children}</MuiLocalizationProvider>;
}

LocalizationProvider.propTypes = {
  children: PropTypes.node,
};
