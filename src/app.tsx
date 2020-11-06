import React from 'react';
// import { renderRoutes } from 'react-router-config';
import {
  BrowserRouter, HashRouter, Link, Route,
} from 'react-router-dom';
import Counter from './components/counter/Counter';
import TestHook from './components/testHook/testHook';
import Parent from './components/testLifeCircle/Parent';

import { Page1 } from './view/testRouterView/Page1';
import { Page2 } from './view/testRouterView/Page2';
import { Child } from './view/testRouterView/Child';

import { TestRef } from './components/testRef/testRef';

// import { routes } from './router/router';

function App() {
  return (
    <BrowserRouter>
      {/* HashRouter里面一定要有一个根节点，不能直接写Route */}
      <div>
        <Counter />
        <TestHook />
        <TestRef />
        <Parent />
        <ul>
          <li>
            <Link to="/">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
          <li>
            <Link to="/child">child</Link>
          </li>
        </ul>

        <hr />

        {/* exact 精准匹配 */}
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/child" component={Child} />
      </div>
    </BrowserRouter>
  );
}

export default App;
