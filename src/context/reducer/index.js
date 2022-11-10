export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const counterDefault = {
  value: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return Object.assign({}, state, { value: state.value + action.payload });
    case DECREASE:
      return Object.assign({}, state, { value: state.value - action.payload });
    default:
      return state;
  }
}

export default counterReducer;
