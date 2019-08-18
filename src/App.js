import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import ToolsScene from './scenes/tools';
import {Global, css} from '@emotion/core';

function App() {
  return (
    <Provider store={store}>
      <Global
        styles={css`
          body {
            background: #fffcfa;
            font-family: 'Ubuntu', sans-serif;
          }
        `}
      />
      <ToolsScene />
    </Provider>
  );
}

export default App;
