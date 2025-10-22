import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a44'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '20a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '539'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '1e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'bb5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '621'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3b7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '6e5'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'dec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/architecture',
        component: ComponentCreator('/architecture', 'a6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/features',
        component: ComponentCreator('/features', 'e44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/problem',
        component: ComponentCreator('/problem', '1a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vision',
        component: ComponentCreator('/vision', 'b0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/why-this',
        component: ComponentCreator('/why-this', '6f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
