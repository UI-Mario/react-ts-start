import { combineReducers } from 'redux';
import countReducer from '../components/counter/reducer';

const reducer = combineReducers({
  count: countReducer,
});

export default reducer;
