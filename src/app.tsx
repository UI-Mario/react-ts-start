import React from 'react';
// import { renderRoutes } from 'react-router-config';
import {
  BrowserRouter, HashRouter, Link, Route,
} from 'react-router-dom';
import Counter from './components/counter/Counter';
import TestHook from './components/testHook/testHook';
import Parent from './components/testLifeCircle/Parent';
import { TestRef } from './components/testRef/testRef';

// import { routes } from './router/router';

function App() {
  return (
    <BrowserRouter>
      {/* HashRouter里面一定要有一个根节点，不能直接写Route */}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/topics">topics</Link>
          </li>
        </ul>

        <hr />

        {/* exact 精准匹配 */}
        <Route exact path="/" component={Counter} />
        <Route path="/about" component={TestRef} />
        <Route path="/topics" component={TestHook} />
      </div>
    </BrowserRouter>
  );
}

export default App;
