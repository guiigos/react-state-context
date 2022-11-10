import React, { Component } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import Context from '../../context/store';
import { increase, decrease } from '../../context/action';

class ClassComponent extends Component {
  render() {
    const dispatchIncrease = () => this.context.dispatch(increase());
    const dispatchDecrease = () => this.context.dispatch(decrease());

    return (
      <Context.Consumer>
        {({ store }) => (
          <p>
            <FaPlusCircle onClick={dispatchIncrease} />
            <span>{store.value}</span>
            <FaMinusCircle onClick={dispatchDecrease} />
          </p>
        )}
      </Context.Consumer>
    );
  }
}

ClassComponent.contextType = Context;

export default ClassComponent;
