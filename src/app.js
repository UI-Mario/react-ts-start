import './app.css';

// test devtool
import React from 'react';

const root = document.querySelector('#root');
root.innerHTML = 'hello webpack';

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
