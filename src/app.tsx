import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Counter from './components/counter/Counter';
import TestHook from './components/testHook/testHook';
import Parent from './components/testLifeCircle/Parent';
import { TestRef } from './components/testRef/testRef';

import { routes } from './router/router';

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
