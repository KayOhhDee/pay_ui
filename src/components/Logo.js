import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';

import logoImg from '../assets/images/logo.svg'

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src={logoImg} alt='logo' width="160px" style={{ margin: '0 2rem' }}/>
    </Box>
  );

  return <RouterLink to="/">{logo}</RouterLink>;
}
