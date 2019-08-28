import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from './card.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(
    <Card>Lorem ipsum dolor sit amet consectetur</Card>
  );
  expect(asFragment()).toMatchSnapshot();
});
