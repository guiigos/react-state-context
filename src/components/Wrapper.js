import React from 'react';
import { ContextProvider } from '../context/store';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

const Wrapper = () => (
  <ContextProvider>
    <ClassComponent />
    <FunctionalComponent />
  </ContextProvider>
);

export default Wrapper;
