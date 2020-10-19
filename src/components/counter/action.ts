export const INCREASE = 'increase';
export function actionIncrease() {
  return {
    type: INCREASE,
    payload: {},
  };
}

export const DECREASE = 'decrease';
export function actionDecrease() {
  return {
    type: DECREASE,
    payload: {},
  };
}
