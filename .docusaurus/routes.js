import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '1d7'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '699'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'dee'),
            routes: [
              {
                path: '/features',
                component: ComponentCreator('/features', '6f4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/how-it-works',
                component: ComponentCreator('/how-it-works', '954'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/introduction',
                component: ComponentCreator('/introduction', 'f62'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/problem-statement',
                component: ComponentCreator('/problem-statement', '22e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tech-stack',
                component: ComponentCreator('/tech-stack', 'eda'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/vision',
                component: ComponentCreator('/vision', '192'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zero-knowledge',
                component: ComponentCreator('/zero-knowledge', '135'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'bea'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
