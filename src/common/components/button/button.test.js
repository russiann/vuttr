import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './button.component';

afterEach(cleanup);

it('renders', () => {
  const {asFragment} = render(<Button>Title</Button>);
  expect(asFragment()).toMatchSnapshot();
});

it('render text', () => {
  const text = 'Hello World!';
  const {getByTestId} = render(<Button>{text}</Button>);
  expect(getByTestId('button')).toHaveTextContent(text);
});
