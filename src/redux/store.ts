import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';

const Store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof reducer>;

export default Store;
