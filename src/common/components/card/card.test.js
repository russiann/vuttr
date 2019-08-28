import React from 'react';
import {render, cleanup} from '@testing-library/react';

import Card from './card.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(
    <Card>Lorem ipsum dolor sit amet consectetur</Card>
  );
  expect(asFragment()).toMatchSnapshot();
});
