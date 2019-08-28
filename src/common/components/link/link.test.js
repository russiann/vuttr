import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Link from './link.component';

afterEach(cleanup);

it('renders', () => {
  const {asFragment} = render(<Link href="http://www.google.com">Google</Link>);
  expect(asFragment()).toMatchSnapshot();
});
