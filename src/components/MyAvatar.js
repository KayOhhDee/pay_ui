// material
import { Card, Typography, Box, Stack } from '@mui/material'
//
import Avatar from './Avatar';
import Iconify from './Iconify';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  return (
    <Card sx={{ px: 1.5, py: 1 }}>
      <Stack flexDirection="row" alignItems="center" justifyContent="center">
        <Avatar
          src={''}
          alt={'Huss Smith'}
          {...other}
          sx={{
            height: '26px',
            width: '26px',
          }}
        />
        <Box sx={{ mx: 1 }}>
          <Typography variant="body2" sx={{ fontSize: "12px", color: '#22C55E' }} align="left">Verified</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Huss Smith</Typography>
        </Box>
        <Iconify icon="akar-icons:chevron-down" width={14} height={14} />
      </Stack>
    </Card>
  );
}
