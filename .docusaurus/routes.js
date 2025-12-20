import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1ae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '16d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd44'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ba8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'a6f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b62'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'aca'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '39c'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b09'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/features',
        component: ComponentCreator('/features', '77d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/how-it-works',
        component: ComponentCreator('/how-it-works', 'bda'),
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
        path: '/tech-stack',
        component: ComponentCreator('/tech-stack', 'b7f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vision',
        component: ComponentCreator('/vision', '1b5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zero-knowledge',
        component: ComponentCreator('/zero-knowledge', '84e'),
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
