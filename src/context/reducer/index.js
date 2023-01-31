export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const INCREASE_ASYNC_START = 'INCREASE_ASYNC_START';
export const INCREASE_ASYNC_END = 'INCREASE_ASYNC_END';
export const DECREASE_ASYNC_START = 'DECREASE_ASYNC_START';
export const DECREASE_ASYNC_END = 'DECREASE_ASYNC_END';

export const counterDefault = {
  value: 0,
  loading: false,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
    case INCREASE_ASYNC_END:
      return Object.assign({}, state, { value: state.value + action.payload, loading: false });
    case DECREASE:
    case DECREASE_ASYNC_END:
      return Object.assign({}, state, { value: state.value - action.payload, loading: false });
    case INCREASE_ASYNC_START:
    case DECREASE_ASYNC_START:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};

export default counterReducer;
