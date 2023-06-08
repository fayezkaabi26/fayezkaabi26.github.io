import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
    disabled: true,
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
    disabled: true,
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/payment',
    disabled: true,
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/withdraw',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
    disabled: true,
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/logout',
    disabled: true,
  },
];