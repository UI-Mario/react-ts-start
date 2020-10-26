import React from 'react';
import Counter from './components/counter/Counter';
import TestHook from './components/testHook/testHook';
import Parent from './components/testLifeCircle/Parent';

function App() {
  return (
    <div className="app">
      <Counter />
      <TestHook />
      <Parent />
    </div>
  );
}

export default App;
