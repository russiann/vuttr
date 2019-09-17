import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'emotion-theming';
import {Global, css} from '@emotion/core';
import ToolsScene from './scenes/listing';
import store from './config/store';
import theme from './config/theme';

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
      <ThemeProvider theme={theme}>
        <ToolsScene />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
