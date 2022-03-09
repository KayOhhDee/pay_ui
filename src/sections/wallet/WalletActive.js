import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography, Box, Button } from '@mui/material';

WalletActive.propTypes = {
  walletData: PropTypes.array,
  setActiveItem: PropTypes.func,
  activeItem: PropTypes.number,
};

export default function WalletActive({ walletData, setActiveItem, activeItem }) {
  return (
    <>
      {
        walletData.map(({ wallet, currency, amount, countryImg }) => (
          <Button
            key={wallet}
            onClick={() =>
              setActiveItem(walletData.indexOf(walletData.find(item => item.wallet === wallet)
            ))}
            sx={{
              p: 2,
              backgroundColor: walletData.indexOf(walletData.find(item => item.wallet === wallet)) === activeItem ? 'primary.lighter' : 'transparent',
              borderRadius: '8px',
              boxShadow: 0,
              width: '100%',
              border: 0,
              color: 'text.primary',
              outline: 0
          }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width: '100%'}}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 2 }}>
                  <img src={countryImg} alt={currency} style={{ borderRadius: '50%' }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                  <Typography variant="subtitle2">{wallet}</Typography>
                  <Typography variant="body2">{currency}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column'}}>
                <Typography variant="subtitle1">{amount}</Typography>
                <Typography variant="body2">Default</Typography>
              </Box>
            </Stack>
          </Button>
        ))
      }
    </>
  )
}
