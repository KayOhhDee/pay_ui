// components
import Iconify from "../../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (icon) => <Iconify icon={icon} />;

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      { title: 'dashboard', path: '/dashboard', icon: getIcon('radix-icons:dashboard') },
      { title: 'wallet', path: '/wallet', icon: getIcon('clarity:wallet-line') },
      { title: 'card', path: '/card', icon: getIcon('bi:credit-card') },
      { title: 'fx center', path: '/fx_center', icon: getIcon('bx:dollar-circle') },
      { title: 'beneficiaries', path: 'beneficiaries', icon: getIcon('fluent:people-16-regular') },
      { title: 'perks', path: 'perks', icon: getIcon('fluent:tag-16-regular') },
    ],
  },
];

export default navConfig;
