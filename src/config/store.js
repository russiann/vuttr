import {init} from '@rematch/core';
import {createLogicMiddleware} from 'redux-logic';
import rematchLogicPlugin from 'rematch-logic';

/** Data Layer */
import tools from '../models/tools.model';

/** Scene Layer */
import listing from '../scenes/listing/listing.model';

const dataLayerModels = {
  tools
};

const sceneLayerModels = {
  listing
};

const logicMiddleware = createLogicMiddleware([], {});

const store = init({
  models: {
    ...dataLayerModels,
    ...sceneLayerModels
  },
  plugins: [rematchLogicPlugin(logicMiddleware)],
  redux: {
    middlewares: [logicMiddleware]
  }
});

export default store;
