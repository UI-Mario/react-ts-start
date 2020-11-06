/* eslint-disable import/prefer-default-export */
import { Page1 } from '../view/testRouterView/Page1';
import { Page2 } from '../view/testRouterView/Page2';
import { Child } from '../view/testRouterView/Child';

/**
 * 看了react-route-config的readme，这还不如不用呢
 * 直接用react-router-dom
 * 顶多就是配置一下，不把route和link写一起
 */

export const routes = [
  // { path: '/', exact: true, render: () => <Redirect to="/page1" /> },
  { path: '/page1', component: Page1 },
  {
    path: '/page2',
    component: Page2,
    routes: [
      {
        path: '/page2/child',
        component: Child,
      },
    ],
  },
];
