import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '821'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '8c1'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'a4d'),
            routes: [
              {
                path: '/features',
                component: ComponentCreator('/features', '6f4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/for-enterprises',
                component: ComponentCreator('/for-enterprises', '226'),
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
                path: '/points-and-rewards',
                component: ComponentCreator('/points-and-rewards', 'f2d'),
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
                path: '/talk-to-myrad/credits',
                component: ComponentCreator('/talk-to-myrad/credits', 'd4e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/talk-to-myrad/getting-access',
                component: ComponentCreator('/talk-to-myrad/getting-access', '2ee'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/talk-to-myrad/integrations',
                component: ComponentCreator('/talk-to-myrad/integrations', '814'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/talk-to-myrad/modes',
                component: ComponentCreator('/talk-to-myrad/modes', 'c2a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/talk-to-myrad/overview',
                component: ComponentCreator('/talk-to-myrad/overview', '165'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/talk-to-myrad/privacy',
                component: ComponentCreator('/talk-to-myrad/privacy', 'd9a'),
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
                path: '/token',
                component: ComponentCreator('/token', '20a'),
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
