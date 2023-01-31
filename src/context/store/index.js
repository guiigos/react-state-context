import React, { useRef } from 'react';
import useCombinedReducers from '../reducer/hooks/useCombinedReducers';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const { store, reducers } = useCombinedReducers();

  const triggerDispatchs = useRef((action) =>
    reducers.forEach(reducer => reducer(action)));

  return (
    <Context.Provider
      value={{
        store,
        dispatch: triggerDispatchs.current,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
