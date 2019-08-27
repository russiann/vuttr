import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Textfield from './textfield.component';

afterEach(cleanup);

it('renders', () => {
  const {asFragment} = render(<Textfield />);
  expect(asFragment()).toMatchSnapshot();
});

it('should render default value', () => {
  const text = 'Hello World!';
  const {getByTestId} = render(<Textfield defaultValue={text} />);
  const input = getByTestId('textfield');
  expect(input.value).toBe(text);
});

it('should render typed text', () => {
  const text = 'Hello World!';
  const {getByTestId} = render(<Textfield />);
  const input = getByTestId('textfield');
  fireEvent.change(input, {target: {value: text}});
  expect(input.value).toBe(text);
});
