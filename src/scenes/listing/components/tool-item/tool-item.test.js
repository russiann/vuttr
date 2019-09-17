import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import ToolItem from './tool-item.component';

afterEach(cleanup);

it('snapshot', () => {
  const {asFragment} = render(<ToolItem />);
  expect(asFragment()).toMatchSnapshot();
});

it('should render tags', () => {
  const toolMock = {
    title: 'test',
    description: 'lorem ipsum dolor sti amet consectetur',
    link: '#',
    tags: ['node', 'es6', 'javascript']
  };
  const {asFragment, queryAllByTestId} = render(<ToolItem tool={toolMock} />);
  const tags = queryAllByTestId('tag');
  expect(asFragment()).toMatchSnapshot();
  expect(tags).toHaveLength(3);
});

it('should fire onTagClick when click on a tag', () => {
  const propsMock = {
    tool: {
      title: 'test',
      description: 'lorem ipsum dolor sti amet consectetur',
      link: '#',
      tags: ['node', 'es6', 'javascript']
    },
    onTagClick: jest.fn()
  };
  const {getAllByTestId} = render(<ToolItem {...propsMock} />);
  const [firstTag] = getAllByTestId('tag');
  fireEvent.click(firstTag);
  expect(propsMock.onTagClick).toHaveBeenCalledTimes(1);
});

it('should fire onRemoveClick when click on a remove button', () => {
  const propsMock = {
    tool: {
      title: 'test',
      description: 'lorem ipsum dolor sti amet consectetur',
      link: '#',
      tags: ['node', 'es6', 'javascript']
    },
    onRemoveClick: jest.fn()
  };
  const {getByTestId} = render(<ToolItem {...propsMock} />);
  const deleteButton = getByTestId('delete-button');
  fireEvent.click(deleteButton);
  expect(propsMock.onRemoveClick).toHaveBeenCalledTimes(1);
});
