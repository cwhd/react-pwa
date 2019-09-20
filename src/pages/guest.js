import fetch from 'universal-fetch';
import skeleton from '../components/skeleton';
import FeaturesImage from '../resources/img/seo/features.png';
import CSSGlobalLocalImage from '../resources/img/seo/css-global-local.png';
import SkeletonImage from '../resources/img/seo/skeleton-loading.png';
import ImageOptimizationImage from '../resources/img/seo/image-optimization.png';


export default [
  {
    path: '/home',
    exact: true,
    component: () => import('../components/home'),
    seo: {
      title: 'Home | Shopr',
      description: 'Shopr information',
      image: FeaturesImage,
    },
  },
  {
    path: '/lists',
    exact: true,
    component: () => import('../components/lists-landing'),
    seo: {
      title: 'My Lists',
      description: 'AI Power for your shopping list',
    },
  },
  {
    path: '/wallets',
    exact: true,
    component: () => import('../components/wallets'),//     component: () => authentication.required(import('../components/wallets')),
    seo: {
      title: 'My Wallets',
      description: 'AI Power for your shopping list',
    },
  },
  {
    path: '/profile',
    exact: true,
    component: () => import('../components/profile'),
    seo: {
      title: 'My Profile',
      description: 'AI Power for your shopping list',
    },
  },
];
