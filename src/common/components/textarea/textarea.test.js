import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';

import Textarea from './textarea.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(<Textarea />);
  expect(asFragment()).toMatchSnapshot();
});

it('should render default value', () => {
  const text = 'Hello World!';
  const {getByTestId} = render(<Textarea defaultValue={text} />);
  const input = getByTestId('textarea');
  expect(input.value).toBe(text);
});

it('should render typed text', () => {
  const text = 'Hello World!';
  const {getByTestId} = render(<Textarea />);
  const input = getByTestId('textarea');
  fireEvent.change(input, {target: {value: text}});
  expect(input.value).toBe(text);
});
