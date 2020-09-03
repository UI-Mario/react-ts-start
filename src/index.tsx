import React from 'react';
import ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

ReactDOM.render(<Hello name="typescript" age={18} />, document.querySelector('#root'));
