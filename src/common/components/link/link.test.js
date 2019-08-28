import React from 'react';
import {render, cleanup} from '@testing-library/react';

import Link from './link.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(<Link href="http://www.google.com">Google</Link>);
  expect(asFragment()).toMatchSnapshot();
});
