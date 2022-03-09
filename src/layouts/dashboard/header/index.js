import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, Typography } from '@mui/material';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
//
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import PlantedPopover from './PlantedPopover';
import Searchbar from './Searchbar';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset',
})(({ isCollapse, isOffset, theme }) => ({
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  backgroundColor: '#FCFDFE',
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    })
  },
}));

// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  onOpenSidebar: PropTypes.func,
  isCollapse: PropTypes.bool
};

export default function DashboardHeader({ onOpenSidebar, isCollapse = false }) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT);

  const isDesktop = useResponsive('up', 'lg');

  const location = useLocation();

  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >

        {!isDesktop && (
          <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonAnimate>
        )}

        <Typography variant="h4" color="textPrimary" sx={{display: {xs: 'none', md: 'block'}}}>
          {/* {Welcome, Huss Smith} */}
          {location.pathname === '/dashboard' ? 'Welcome, Huss Smith' : 'Wallet'}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Searchbar />
          <PlantedPopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
