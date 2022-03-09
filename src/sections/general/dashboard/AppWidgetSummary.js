import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(() => ({
  width: '100%',
  boxShadow: 'none',
  position: 'relative',
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  title: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error']),
  countryImg: PropTypes.object,
};


export default function AppWidgetSummary({ title, countryImg, currency, amount, color = 'primary' }) {
  return (
    <RootStyle
      sx={{
        bgcolor: (theme) => theme.palette[color].lighter,
        display: 'flex', justifyContent: 'center', flexDirection: 'column', p: 3
      }}
    >
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Box>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2">{currency}</Typography>
          </Box>
          <Box>
            <img src={countryImg} alt={currency} style={{borderRadius: '50%'}} />
          </Box>
        </Stack>
        <Typography variant="h5">{amount}</Typography>
    </RootStyle>
  )
}
