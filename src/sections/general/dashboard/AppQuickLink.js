import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Button, Typography, Box } from '@mui/material';
import Iconify from '../../../components/Iconify';

// -------------------------------------------------------------------------

const RootStyle = styled(Button)(({theme}) => ({
  boxShadow: 'none',
  position: 'relative',
  height: '131px',
  minWidth: '120px',
  border: '1px solid #F1F5F9',
  textTransform: 'none',
  padding: '1.1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.palette.common.black
}));

const IconContainer = styled(Box)(({theme}) => ({
  borderRadius: '50%',
  color: theme.palette.common.white,
  width: '32px',
  height: '32px',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// --------------------------------------------------------------------------

AppQuickLink.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error'])
}

// --------------------------------------------------------------------------

export default function AppQuickLink({ name, icon, color = 'primary.main' }) {

  return (
    <RootStyle>
      <IconContainer sx={{ mb: 1, backgroundColor: color }}>
        <Iconify icon={icon} />
      </IconContainer>
      <Typography variant='body2'>{name}</Typography>
    </RootStyle>
  )
}
