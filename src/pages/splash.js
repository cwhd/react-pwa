
export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/splash'),
    seo: {
      title: 'Shopr | your AI powered shopping assistant',
      description: 'Shopping with your best interest in mind to save you money and time',
    },
  },
];
