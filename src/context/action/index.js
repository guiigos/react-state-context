import { INCREASE, DECREASE } from '../reducer';

export const increase = () => ({
  type: INCREASE,
  payload: 1,
});

export const decrease = () => ({
  type: DECREASE,
  payload: 1,
});
