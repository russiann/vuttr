import React from 'react';

const withMemo = func => WrappedComponent => React.memo(WrappedComponent, func);

export default withMemo;
