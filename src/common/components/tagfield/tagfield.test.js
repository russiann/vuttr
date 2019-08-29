import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';

import TagField from './tagfield.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(
    <TagField value={['lorem', 'ipsum', 'dolor', 'sit']} />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('should render tags', () => {
  const {asFragment, queryAllByTestId} = render(
    <TagField value={['lorem', 'ipsum', 'dolor', 'sit']} />
  );
  const tags = queryAllByTestId('tag');
  expect(asFragment()).toMatchSnapshot();
  expect(tags).toHaveLength(4);
});

it('should add tag when type Enter', () => {
  const onChangeSpy = jest.fn();
  const {getByTestId} = render(
    <TagField value={['js', 'css']} onChange={onChangeSpy} />
  );
  const textfield = getByTestId('textfield');
  fireEvent.change(textfield, {target: {value: 'node'}});
  fireEvent.keyDown(textfield, {keyCode: 13});
  expect(onChangeSpy).toHaveBeenCalledTimes(1);
  expect(onChangeSpy).toHaveBeenCalledWith(['js', 'css', 'node']);
});

it('should add tag when type comma', () => {
  const onChangeSpy = jest.fn();
  const {getByTestId} = render(
    <TagField value={['js', 'css']} onChange={onChangeSpy} />
  );
  const textfield = getByTestId('textfield');
  fireEvent.change(textfield, {target: {value: 'node'}});
  fireEvent.keyDown(textfield, {keyCode: 188});
  expect(onChangeSpy).toHaveBeenCalledTimes(1);
  expect(onChangeSpy).toHaveBeenCalledWith(['js', 'css', 'node']);
});

it('should remove tag when type backspace', () => {
  const onChangeSpy = jest.fn();
  const {getByTestId} = render(
    <TagField value={['js', 'css', 'node']} onChange={onChangeSpy} />
  );
  const textfield = getByTestId('textfield');
  fireEvent.keyDown(textfield, {keyCode: 8});
  expect(onChangeSpy).toHaveBeenCalledTimes(1);
  expect(onChangeSpy).toHaveBeenCalledWith(['js', 'css']);
});
