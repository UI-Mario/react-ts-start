// eslint-disable-next-line no-unused-vars
import { counterActionType } from './actionType';
// md又说我没用counterActionType，佛了

export const INCREASE = 'increase';
export function actionIncrease(): counterActionType {
  return {
    type: INCREASE,
    payload: {},
  };
}

export const DECREASE = 'decrease';
export function actionDecrease(): counterActionType {
  return {
    type: DECREASE,
    payload: {},
  };
}
