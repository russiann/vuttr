import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Searchfield from './searchfield.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(<Searchfield />);
  expect(asFragment()).toMatchSnapshot();
});

it('should render default value', () => {
  const text = 'Hello World!';
  const {getByTestId} = render(<Searchfield defaultValue={text} />);
  const input = getByTestId('input');
  expect(input.value).toBe(text);
});

it('should render typed text', () => {
  const text = 'Hello World!';
  const {getByTestId} = render(<Searchfield />);
  const input = getByTestId('input');
  fireEvent.change(input, {target: {value: text}});
  expect(input.value).toBe(text);
});

it('should fire onSearch with value when button clicked', () => {
  const onSearchSpy = jest.fn();
  const value = 'lorem ipsum dolor';
  const {getByTestId} = render(
    <Searchfield onSearch={onSearchSpy} value={value} onChange={jest.fn} />
  );
  const button = getByTestId('button');
  fireEvent.click(button);
  expect(onSearchSpy).toHaveBeenCalledWith(value);
});

it('should fire onSearch when keydown Enter', async () => {
  const onSearchSpy = jest.fn();
  const value = 'lorem ipsum dolor';

  const {getByTestId} = render(
    <Searchfield onSearch={onSearchSpy} value={value} onChange={jest.fn} />
  );

  const input = getByTestId('input');

  fireEvent.keyDown(input, {
    key: 'Enter',
    code: 13,
    keyCode: 13
  });

  expect(onSearchSpy).toHaveBeenCalledWith(value);
});
