import React from 'react';

const pick = (obj, fields) => {
  let picked = {};
  if (obj instanceof Object && fields instanceof Array) {
    fields.forEach(field => {
      picked[field] = obj[field];
    });
  }
  return picked;
};

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
