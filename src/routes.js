import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------
//
import General from './pages/dashboard/General';
import Wallet from './pages/dashboard/Wallet';
import Card from './pages/dashboard/Card';
import FxCentre from './pages/dashboard/FxCentre';
import Beneficiaries from './pages/dashboard/Beneficiaries';
import Perks from './pages/dashboard/Perks';

//-----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard" replace />, index: true },
        { path: 'dashboard', element: <General /> },
        { path: 'wallet', element: <Wallet /> },
        { path: 'card', element: <Card /> },
        { path: 'fx_center', element: <FxCentre /> },
        { path: 'beneficiaries', element: <Beneficiaries /> },
        { path: 'perks', element: <Perks /> },
        { path: '404', element: <NotFound /> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}