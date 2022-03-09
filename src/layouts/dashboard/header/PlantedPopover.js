import { Typography, Stack } from '@mui/material';
import React from 'react';
import Iconify from '../../../components/Iconify';

export default function PlantedPopover() {
  return (
    <Stack flexDirection="row" alignItems="center">
      <Iconify icon="akar-icons:plant" color="text.secondary" width={20}height={20} />
      <Typography variant="body2" color="text.secondary" sx={{ml: 0.5, display: 'flex'}}>
        <Typography component="span" sx={{mr: 0.5}}>0</Typography>
        <Typography component="span" sx={{ display: { xs: 'none', md: 'block' } }}>planted</Typography>
      </Typography>
    </Stack>
  )
}
