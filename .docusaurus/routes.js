import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '153'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'a43'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '238'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '041'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '3e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '998'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '92f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '9eb'),
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
