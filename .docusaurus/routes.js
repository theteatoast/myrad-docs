import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '046'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b09'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/architecture',
        component: ComponentCreator('/architecture', 'c53'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/demo',
        component: ComponentCreator('/demo', '4b9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/introduction',
        component: ComponentCreator('/introduction', '9bc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/problem-statement',
        component: ComponentCreator('/problem-statement', '7c6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/strategy-roadmap',
        component: ComponentCreator('/strategy-roadmap', '680'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/tokenomics',
        component: ComponentCreator('/tokenomics', '10c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vision',
        component: ComponentCreator('/vision', '1b5'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
