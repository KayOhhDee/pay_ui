import React from 'react';
import { Stack, Button, Box } from '@mui/material';
//
import Iconify from '../../components/Iconify';
import { WalletActivityChart } from '../general/wallet';

export default function LedgerActivity() {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row" justifyContent="flex-end" mb={1}>
        <Button
          color="primary"
          endIcon={<Iconify icon="akar-icons:chevron-down" width={14} height={14} />}
        >
          Month
        </Button>
      </Stack>

      <WalletActivityChart />
    </Box>
  )
}
