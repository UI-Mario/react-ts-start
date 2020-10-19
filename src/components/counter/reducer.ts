import * as A from './action';

function counterReducer(state = { count: 0 }, action: any) {
  const { count } = state;
  switch (action.type) {
    case A.INCREASE:
      return { count: count + 1 };
    case A.DECREASE:
      return { count: count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
