import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import referLogo from '../../../assets/images/refer.png';

const RootStyles = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.warning.lighter,
  margin: '5rem 1.2rem',
  padding: '1.2rem',
  borderRadius: '8px',
}));


export default function NavbarRefer() {
  return (
    <RootStyles>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 2 }}>
          <img src={referLogo} alt="refer" width="40" height="40" />
        </Box>
        <Box>
          <Typography variant="subtitle1">Refer and earn</Typography>
          <Typography variant="body2" color="text.secondary">Use the below link to invite friends</Typography>
        </Box>
      </Box>
      <Button variant='contained' size="large" fullWidth sx={{mt: 1.5}}>
        Invite Friends
      </Button>
    </RootStyles>
  )
}
