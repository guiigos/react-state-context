import { useContext } from 'react';
import Context from '../';

const useContextProvider = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useContextProvider inside <ContextProvider />');
  }

  return context;
};

export default useContextProvider;
