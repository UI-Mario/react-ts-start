function counterReducer(state = { count: 0 }, action: any) {
  const { count } = state;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    case 'decrease':
      return { count: count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
