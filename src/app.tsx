import React from 'react';
import Counter from './components/counter/Counter';
import TestHook from './components/testHook/testHook';
import Parent from './components/testLifeCircle/Parent';
import { TestRef } from './components/testRef/testRef';

function App() {
  return (
    <div className="app">
      <Counter />
      <TestHook />
      <Parent />
      <TestRef />
    </div>
  );
}

export default App;
