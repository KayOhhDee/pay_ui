import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';

import { BaseOptionChart } from '../../../components/chart';
import Iconify from '../../../components/Iconify';

const IconContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[500_16],
  borderRadius: '8px',
  width: '32px',
  height: '32px',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CHART_DATA = [
  {
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21],
  },
];

const CATEGORY = [
  {
    title: 'Total transactions',
    amount: '$1,000',
    icon: 'carbon:analytics'
  },
  {
    title: 'Pay-In',
    amount: '$10,000',
    icon: 'radix-icons:arrow-bottom-left',
    color: 'success.main'
  },
  {
    title: 'Pay-Out',
    amount: '$12,000',
    icon: 'radix-icons:arrow-top-right',
    color: 'error.main'
  },
]

export default function WalletActivityChart() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { curve: 'smooth'},
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul'
    ],
    xaxis: {
      type: 'month',
      labels: {
        style: {
          colors: 'text.primary'
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value}`,
        style: {
          colors: ['text.primary']
        }
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `$${y.toFixed(2)}`;
          }
          return y;
        },
        title: {
          formatter: () => '',
        },
      },
      marker: {
        show: false
      }
    },
  });

  return (
    <Box>
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{overflow: 'auto'}}>
        {
          CATEGORY.map(({ title, amount, icon, color }) => (
          <Category
            key={title}
            title={title}
            amount={amount}
            icon={icon}
            color={color}
          />
        ))}
      </Stack>
      <Box dir="ltr">
        <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Box>
  );
}

function Category({ title, amount, icon, color }) {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 1 }}>
          <IconContainer>
            <Iconify icon={icon} color={color} />
          </IconContainer>
        </Box>
        <Box>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="subtitle1">{amount}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

Category.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
};