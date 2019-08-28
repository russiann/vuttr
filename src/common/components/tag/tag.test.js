import React from 'react';
import {render, cleanup} from '@testing-library/react';

import Tag from './tag.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(<Tag>#node</Tag>);
  expect(asFragment()).toMatchSnapshot();
});
