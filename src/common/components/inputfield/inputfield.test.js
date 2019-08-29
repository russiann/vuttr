import React from 'react';
import {render, cleanup} from '@testing-library/react';

import InputField from './inputfield.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(
    <InputField
      type="text"
      label="Tool Name"
      placeholder="lorem ipsum dolor sit amet..."
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('should not show label if it does not exists', () => {
  const {asFragment, queryByTestId} = render(
    <InputField type="text" placeholder="lorem ipsum dolor sit amet..." />
  );
  const label = queryByTestId('label');
  expect(asFragment()).toMatchSnapshot();
  expect(label).toBe(null);
});

it('should show label if it exists', () => {
  const labelText = 'Tool Name';
  const {asFragment, getByTestId} = render(
    <InputField
      type="text"
      label={labelText}
      placeholder="lorem ipsum dolor sit amet..."
    />
  );
  const label = getByTestId('label');
  expect(asFragment()).toMatchSnapshot();
  expect(label).toHaveTextContent(labelText);
});

it('should not show errorMessage if it does not exists', () => {
  const {asFragment, queryByTestId} = render(
    <InputField type="text" placeholder="lorem ipsum dolor sit amet..." />
  );
  const errorMessage = queryByTestId('error-message');
  expect(asFragment()).toMatchSnapshot();
  expect(errorMessage).toBe(null);
});

it('should show errorMessage if it exists', () => {
  const errorMessageText = 'Invalid!';
  const {asFragment, getByTestId} = render(
    <InputField
      type="text"
      placeholder="lorem ipsum dolor sit amet..."
      errorMessage={errorMessageText}
    />
  );
  const errorMessage = getByTestId('error-message');
  expect(asFragment()).toMatchSnapshot();
  expect(errorMessage).toHaveTextContent(errorMessageText);
});
