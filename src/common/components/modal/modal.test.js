import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';

import Modal from './modal.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(
    <Modal title="Simple Modal" isVisible>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </Modal>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('should not render anything if isVisible is false', () => {
  const {queryByTestId} = render(
    <Modal title="Simple Modal" isVisible={false}>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </Modal>
  );
  const container = queryByTestId('container');
  expect(container).toBe(null);
});

it('should fire onClose when click on close button', () => {
  const onCloseSpy = jest.fn();
  const {getByTestId} = render(
    <Modal title="Simple Modal" isVisible onClose={onCloseSpy}>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </Modal>
  );
  const closeButton = getByTestId('close-button');
  fireEvent.click(closeButton);
  expect(onCloseSpy).toHaveBeenCalledTimes(1);
});

it('should fire onClose when click outside modal', () => {
  const onCloseSpy = jest.fn();
  const {getByTestId} = render(
    <Modal title="Simple Modal" isVisible onClose={onCloseSpy}>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </Modal>
  );
  const closeButton = getByTestId('container');
  fireEvent.click(closeButton);
  expect(onCloseSpy).toHaveBeenCalledTimes(1);
});

it('should not fire onClose when click inside modal', () => {
  const onCloseSpy = jest.fn();
  const {getByTestId} = render(
    <Modal title="Simple Modal" isVisible onClose={onCloseSpy}>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </Modal>
  );
  const dialog = getByTestId('dialog');
  fireEvent.click(dialog);
  expect(onCloseSpy).toHaveBeenCalledTimes(0);
});
