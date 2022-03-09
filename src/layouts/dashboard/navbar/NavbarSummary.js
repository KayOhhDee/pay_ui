import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Divider, Typography, Box, Button, Grid, IconButton } from '@mui/material'
import Iconify from '../../../components/Iconify';

const IconContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: '8px',
  width: '32px',
  height: '32px',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function NavbarSummary() {
  return (
    <Card sx={{
      backgroundColor: 'primary.light',
      py: 2,
      px: 2.5,
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconContainer sx={{ mr: 1 }}>
          <Iconify icon="et:wallet" />
        </IconContainer>
        <Box>
          <Typography variant='body2' color="text.white">
            Wallet Balance
          </Typography>
          <Typography variant='subtitle1' color="text.white">
            $15,000.00
          </Typography>
        </Box>
        <IconButton aria-label="view" size="small" sx={{ml: 'auto'}}>
          <Iconify icon="carbon:view-filled" color="text.white" />
        </IconButton>
      </Box>

      <Divider variant="middle" sx={{ border: '0.5px solid #EAFBFF', my: 1, mx: 0}} />

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconContainer sx={{ mr: 1 }}>
          <Iconify icon="emojione:star" />
        </IconContainer>
        <Box>
          <Typography variant='body2' color="text.white">
            Awarded Points
          </Typography>
          <Typography variant='subtitle1' color="text.white">
            40
          </Typography>
        </Box>
      </Box>

      <Divider variant="middle" sx={{ border: '0.5px solid #EAFBFF', mt: 1, mb: 2, mx: 0 }} />

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="secondary" sx={{ borderRadius: '4px', fontWeight: 'normal' }}>
            Pay-In
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="white" sx={{ borderRadius: '4px', fontWeight: 'normal' }}>
            Pay-Out
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}
