import React from 'react';
import pick from './pick';

const withHooks = (mapHooksToProps, {frozenProps = []} = {}) => {
  return WrappedComponent => {
    return props => {
      let overrideablePropsObj = mapHooksToProps(props);
      let frozenPropsObj = pick(overrideablePropsObj, frozenProps);

      return React.createElement(WrappedComponent, {
        ...overrideablePropsObj,
        ...props,
        ...frozenPropsObj
      });
    };
  };
};

export default withHooks;
