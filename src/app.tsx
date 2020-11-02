import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter, Redirect } from 'react-router-dom';
import Counter from './components/counter/Counter';
import TestHook from './components/testHook/testHook';
import Parent from './components/testLifeCircle/Parent';
import { TestRef } from './components/testRef/testRef';

import { Page1 } from './view/testRouterView/Page1';
import { Page2 } from './view/testRouterView/Page2';
import { Child } from './view/testRouterView/Child';

const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/page1" /> },
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

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Counter />
        <TestHook />
        <Parent />
        <TestRef />
      </div>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
