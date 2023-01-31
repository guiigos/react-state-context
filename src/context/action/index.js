import {
  INCREASE,
  DECREASE,
  INCREASE_ASYNC_START,
  INCREASE_ASYNC_END,
  DECREASE_ASYNC_START,
  DECREASE_ASYNC_END,
} from '../reducer';

export const increase = () => ({
  type: INCREASE,
  payload: 1,
});

export const decrease = () => ({
  type: DECREASE,
  payload: 1,
});

export const increaseAsync = async (dispatch) => {
  dispatch({ type: INCREASE_ASYNC_START });

  return await new Promise((response) => {
    setTimeout(() => {
      dispatch({ type: INCREASE_ASYNC_END, payload: 1 });
      response();
    }, 2000);
  });
};

export const decreaseAsync = async (dispatch) => {
  dispatch({ type: DECREASE_ASYNC_START });

  return await new Promise((response) => {
    setTimeout(() => {
      dispatch({ type: DECREASE_ASYNC_END, payload: 1 });
      response();
    }, 2000);
  });
};
