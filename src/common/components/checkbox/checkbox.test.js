import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Checkbox from './checkbox.component';

afterEach(cleanup);

it('renders', () => {
  const {asFragment} = render(<Checkbox />);
  expect(asFragment()).toMatchSnapshot();
});

it('should not show label if it dont pass label prop', () => {
  const {queryByTestId} = render(<Checkbox />);
  const label = queryByTestId('label');
  expect(label).toBeNull();
});

it('should show label', () => {
  const labelText = 'lorem ipsum';
  const {getByTestId} = render(<Checkbox label={labelText} />);
  const label = getByTestId('label');
  expect(label).toHaveTextContent(labelText);
});

it('should be checked if do not pass checked prop', () => {
  const {getByTestId} = render(<Checkbox onChange={jest.fn()} />);
  const checkbox = getByTestId('checkbox');
  expect(checkbox.checked).toBe(false);
});

it('should be checked if pass checked as true', () => {
  const {getByTestId} = render(<Checkbox checked onChange={jest.fn()} />);
  const checkbox = getByTestId('checkbox');
  expect(checkbox.checked).toBe(true);
});

it('should be checked if pass checked as false', () => {
  const {getByTestId} = render(
    <Checkbox checked={false} onChange={jest.fn()} />
  );
  const checkbox = getByTestId('checkbox');
  expect(checkbox.checked).toBe(false);
});
