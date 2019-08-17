import {init} from '@rematch/core';
import {createLogicMiddleware} from 'redux-logic';
import rematchLogicPlugin from 'rematch-logic';
import tools from '../models/tools.model';

const logicMiddleware = createLogicMiddleware([], {});

const store = init({
  models: {
    tools
  },
  plugins: [rematchLogicPlugin(logicMiddleware)],
  redux: {
    middlewares: [logicMiddleware]
  }
});

export default store;
