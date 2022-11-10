import React from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import useContextProvider from '../../context/store/hooks/useContextProvider';
import { increase, decrease } from '../../context/action';

const FunctionalComponent = () => {
  const { store, dispatch } = useContextProvider();

  return (
    <p>
      <FaPlusCircle onClick={() => dispatch(increase())} />
      <span>{store.value}</span>
      <FaMinusCircle onClick={() => dispatch(decrease())} />
    </p>
  );
}

export default FunctionalComponent;
