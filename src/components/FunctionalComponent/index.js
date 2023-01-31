import React from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import useContextProvider from '../../context/store/hooks/useContextProvider';
import { increaseAsync, decreaseAsync } from '../../context/action';

const FunctionalComponent = () => {
  const { store, dispatch } = useContextProvider();

  return (
    <p>
      <FaPlusCircle onClick={() => increaseAsync(dispatch)} />
      <span>{store.loading ? '...' : store.value}</span>
      <FaMinusCircle onClick={() => decreaseAsync(dispatch)} />
    </p>
  );
}

export default FunctionalComponent;
