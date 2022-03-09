import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import Iconify from '../../../components/Iconify';

export default function Searchbar() {
  return (
    <TextField
      placeholder="Search"
      id="outlined-start-adornment"
      size="small"
      sx={{ display: { xs: 'none', md: 'block' } }}
      InputProps={{
        startAdornment: <InputAdornment position="start">
          <Iconify icon="akar-icons:search" />
        </InputAdornment>,
      }}
    />
  )
}
