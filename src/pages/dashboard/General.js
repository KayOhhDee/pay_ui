import { Typography, Card, Container, Stack, Button, Grid, Box } from '@mui/material';
import React from 'react';
//
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { AppQuickLink, AppWidgetSummary } from '../../sections/general/dashboard';
import { WalletActivityChart } from '../../sections/general/wallet';
// images
import USDImg from '../../assets/images/USD.png';
import EURImg from '../../assets/images/EUR.png';
import GBPImg from '../../assets/images/GBP.png';

const WALLETMOCK = [
  {
    id: '1',
    name: 'Personal Account',
    currency: 'USD',
    amount: '$10,250.00',
    color: 'warning',
    countryImg: USDImg,
  },
  {
    id: '2',
    name: 'EUR Wallet',
    currency: 'EUR',
    amount: '€4,000.00',
    color: 'secondary',
    countryImg: EURImg,
  },
  {
    id: '3',
    name: 'School Fees',
    currency: 'GBP',
    amount: '£1,000.00',
    countryImg: GBPImg,
  }
]

const QUICK_LINKS = [
  {
    id: '1',
    name: 'Add new Wallet',
    icon: 'clarity:wallet-solid',
    color: '#F97316',
  },
  {
    id: '2',
    name: 'Add new Card',
    icon: 'bi:credit-card-fill',
    color: '#005061',
  },
  {
    id: '3',
    name: 'Balance Exchange',
    icon: 'ant-design:dollar-circle-filled',
    color: '#F59E0B',
  },
  {
    id: '4',
    name: 'Transfer to Account',
    icon: 'bx:transfer',
    color: '#5EEAD4',
  },
  {
    id: '5',
    name: 'Generate Voucher',
    icon: 'ic:baseline-space-dashboard',
    color: '#9333EA',
  },
  {
    id: '6',
    name: 'Mobile Money',
    icon: 'bytesize:mobile',
    color: '#FFCB00',
  },
  {
    id: '7',
    name: 'Payment Link',
    icon: 'akar-icons:link-chain',
    color: '#F43F5E',
  },
]

export default function General() {
  return (
    <Page title="Dashboard">
      <Container>
        <Card sx={{ p: 1.5 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
            <Typography variant='h5'>
              Wallet (5)
            </Typography>

            <Button color="primary">
              View all wallets
            </Button>
          </Stack>
          <Grid container spacing={2} mb={7}>
            {WALLETMOCK.map(({ id, name, currency, amount, color, countryImg }) => (
              <Grid item xs={12} md={4} key={id}>
                <AppWidgetSummary
                  title={name}
                  currency={currency}
                  amount={amount}
                  color={color}
                  countryImg={countryImg}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mb: 3 }}>
            <Typography variant='h5'>
              Quick Links
            </Typography>
            <Typography variant='body1' color="text.disabled">
              Your frequently used actions for easy access.
            </Typography>
          </Box>
          <Stack direction="row" alignItems="center" spacing={2} mb={7} sx={{overflow: 'auto'}}>
            {QUICK_LINKS.map(({ id, name, icon, color }) => (
              <AppQuickLink key={id} name={name} icon={icon} color={color} />
            ))}
          </Stack>

          <Box sx={{ mb: 3 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant='h5'>
                  Activity
                </Typography>
                <Button
                  color="primary"
                  endIcon={<Iconify icon="akar-icons:chevron-down" width={14} height={14} />}
                >
                  Month
                </Button>
              </Stack>
              <Button color="primary">
                View Transaction History
              </Button>
            </Stack>

            <WalletActivityChart />
          </Box>
        </Card>
      </Container>
    </Page>
  )
}

