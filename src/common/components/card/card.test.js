import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './card.component';

afterEach(cleanup);

it('renders', () => {
  const {asFragment} = render(<Button>Title</Button>);
  expect(asFragment()).toMatchSnapshot();
});
