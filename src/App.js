import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import ToolsScene from './scenes/tools';

function App() {
  return (
    <Provider store={store}>
      <ToolsScene />
    </Provider>
  );
}

export default App;
