import React from 'react'
import PropTypes from 'prop-types'
import { capitalCase } from 'change-case'
import { styled } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material'
import Iconify from '../../../components/Iconify';

WalletWidgetSummary.propTypes = {
  wallet: PropTypes.string,
  currency: PropTypes.string,
  amount: PropTypes.string,
  status: PropTypes.string,
}

// -------------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  boxShadow: 'none',
  position: 'relative',
  width: '100%',
  border: '1px solid #F1F5F9',
  textTransform: 'none',
  padding: '1.2rem',
  borderRadius: '16px',
  color: theme.palette.common.black,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export default function WalletWidgetSummary({ status, currency, wallet, amount }) {
  return (
    <RootStyle>
      <Box>
        <Stack direction="row" alignItems="center">
          <Iconify
            icon="carbon:dot-mark"
            color={
              (status === 'active' && "success.main") ||
              (status === "inactive" && "warning.main") ||
              "error.main"
            }
          />
          <Typography
            variant="body2" color={
              (status === 'active' && "success.main") ||
              (status === "inactive" && "warning.main") ||
              "error.main"
            }
          >{capitalCase(status)}</Typography>
        </Stack>
        <Typography variant="body1">{wallet || ''}</Typography>
        <Typography variant="subtitle1" color="primary.main">{currency || ''}</Typography>
      </Box>
      <Typography variant="h3">{amount || ''}</Typography>
    </RootStyle>
  )
}
