import {configure, addDecorator} from '@storybook/react';
import {withTests} from '@storybook/addon-jest';

import results from '../jest-test-results.json';

addDecorator(
  withTests({
    results
  })
);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
