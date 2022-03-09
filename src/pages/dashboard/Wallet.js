import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { capitalCase } from 'change-case';
import {
  Typography,
  Card,
  Container,
  Stack,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Tab,
  Box,
  Tabs,
  Collapse
} from '@mui/material';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { WalletWidgetSummary } from '../../sections/general/wallet';
import { WalletLedgerDetails, WalletActive, WalletInactive, WalletClosed, LedgerActivity, LedgerTransaction, LedgerInvoice } from '../../sections/wallet';

// images
import USDImg from '../../assets/images/USD.png';
import EURImg from '../../assets/images/EUR.png';
import GBPImg from '../../assets/images/GBP.png';

// ------------------------------------------------------------

const IconContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[500_16],
  borderRadius: '8px',
  color: theme.palette.primary.main,
  width: '32px',
  height: '32px',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


// ------------------------------------------------------------------

const WALLETMOCK = {
  active: [
    {
      id: 1,
      wallet: 'EUR Wallet',
      currency: 'EUR',
      amount: '€2,000,000.50',
      countryImg: EURImg,
    },
    {
      id: 2,
      wallet: 'Personal account',
      currency: 'USD',
      amount: '$1,000,000.50',
      countryImg: USDImg,
    },
    {
      id: 3,
      wallet: 'School savings',
      currency: 'GBP',
      amount: '£5,000.50',
      countryImg: GBPImg,
    },
  ],
  inactive: [
    {
      id: 1,
      wallet: 'School savings',
      currency: 'GBP',
      amount: '£5,000.50',
      countryImg: GBPImg,
    }
  ],
  closed: [
    {
      id: 1,
      wallet: 'Personal account',
      currency: 'USD',
      amount: '$1,000,000.50',
      countryImg: USDImg,
    }
  ]
}

// -------------------------------------------------------------------------

const LEDGER_TABS = [
  {
    value: 'activity',
    component: <LedgerActivity />,
  },
  {
    value: 'transactions',
    component: <LedgerTransaction />,
  },
  {
    value: 'invoices',
    component: <LedgerInvoice />,
  }
];

const MORE_OPTIONS = [
  {
    label: 'Set as Default Wallet',
    icon: 'akar-icons:star',
  },
  {
    label: 'View Linked Cards',
    icon: 'bi:credit-card',
  },
  {
    label: 'Statements',
    icon: 'majesticons:paper-fold-text-line',
  },
  {
    label: 'Inflow Details',
    icon: 'carbon:send-alt',
  },
  {
    label: 'Wallet Information',
    icon: 'ant-design:info-circle-outlined',
  }
]

export default function Wallet() {
  const [currentWalletTab, setCurrentWalletTab] = useState('active');
  const [currentLedgerTab, setCurrentLedgerTab] = useState('activity');
  const [activeItem, setActiveItem] = useState(0);
  const [isOpenMoreOptions, setIsOpenMoreOptions] = useState(false);
  const walletTabs = [
    {
      value: 'active',
      itemsCount: WALLETMOCK.active.length,
      component: <WalletActive
        walletData={WALLETMOCK[currentWalletTab]}
        setActiveItem={(item) => setActiveItem(item)}
        activeItem={activeItem}
      />
    },
    {
      value: 'inactive',
      itemsCount: WALLETMOCK.inactive.length,
      // component: <WalletInactive />,
      component: <WalletActive
        walletData={WALLETMOCK[currentWalletTab]}
        setActiveItem={(item) => setActiveItem(item)}
        activeItem={activeItem}
      />
    },
    {
      value: 'closed',
      itemsCount: WALLETMOCK.closed.length,
      // component: <WalletClosed />,
      component: <WalletActive
        walletData={WALLETMOCK[currentWalletTab]}
        setActiveItem={(item) => setActiveItem(item)}
        activeItem={activeItem}
      />
    }
  ];

  useEffect(() => {
    setActiveItem(0);
  }, [currentWalletTab]);


  return (
    <Page title="Wallet">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Typography variant='h5'>
            Your  Wallet (s)
          </Typography>

          <Button
            color="primary"
            variant="contained"
            size="large"
            startIcon={<Iconify icon="akar-icons:plus" />}
          >
            Create new wallet
          </Button>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Card sx={{ p: 1.5 }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2.5}>
                <TextField
                  placeholder="Search"
                  id="outlined-start-adornment"
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      <Iconify icon="akar-icons:search" />
                    </InputAdornment>,
                  }}
                />

                <Button
                  color="primary"
                  endIcon={<Iconify icon="akar-icons:chevron-down" width={14} height={14} />}
                >
                  All
                </Button>
              </Stack>

              <Tabs
                value={currentWalletTab}
                scrollButtons="auto"
                variant="fullWidth"
                allowScrollButtonsMobile
                onChange={(e, value) => setCurrentWalletTab(value)}
              >
                {walletTabs.map((tab) => (
                  <Tab
                    disableRipple
                    key={tab.value}
                    label={`${capitalCase(tab.value)} (${tab.itemsCount})`}
                    value={tab.value}
                  />
                ))}
              </Tabs>

              <Box sx={{ mb: 3 }} />

              {walletTabs.map((tab) => {
                const isMatched = tab.value === currentWalletTab;
                return isMatched && <Box key={tab.value}>{tab.component}</Box>;
              })}
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card sx={{ px: 4.5, py: 2.5 }}>
              <WalletWidgetSummary
                status={currentWalletTab}
                amount={WALLETMOCK[currentWalletTab][activeItem]?.amount || 0}
                currency={WALLETMOCK[currentWalletTab][activeItem]?.currency || ''}
                wallet={WALLETMOCK[currentWalletTab][activeItem]?.wallet || ''}
              />

              <WalletLedgerDetails />

              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                  <Button
                    size="large"
                    fullWidth
                    variant="outlined"
                    startIcon={<Iconify icon="carbon:send-alt" height={20} width={20} />}
                  >
                    Payment
                  </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    size="large"
                    fullWidth
                    variant="outlined"
                    startIcon={<Iconify icon="radix-icons:arrow-bottom-left" height={20} width={20} />}
                  >Pay In</Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    size="large"
                    fullWidth
                    variant="outlined"
                    startIcon={<Iconify icon="la:exchange-alt" height={20} width={20} />}
                  >Exchange</Button>
                </Grid>
              </Grid>

              <Button
                color="primary"
                onClick={() => setIsOpenMoreOptions(!isOpenMoreOptions)}
                endIcon={<Iconify icon="akar-icons:chevron-down" width={14} height={14} />}
              >
                More Options
              </Button>

              <Collapse in={isOpenMoreOptions}>
                {MORE_OPTIONS.map(({label, icon}) => (
                  <Box key={label} sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                    <Box sx={{ mr: 2 }}>
                      <IconContainer>
                        <Iconify icon={icon} />
                      </IconContainer>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                      <Typography variant="body1">{label}</Typography>
                    </Box>
                  </Box>
                ))}
              </Collapse>

              <Box sx={{ mb: 2 }} />

              <Tabs
                value={currentLedgerTab}
                scrollButtons="auto"
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={(e, value) => setCurrentLedgerTab(value)}
              >
                {LEDGER_TABS.map((tab) => (
                  <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} value={tab.value} />
                ))}
              </Tabs>

              <Box sx={{ mb: 2 }} />

              {LEDGER_TABS.map((tab) => {
                const isMatched = tab.value === currentLedgerTab;
                return isMatched && <Box key={tab.value}>{tab.component}</Box>;
              })}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}
