import React from 'react';
import {render, cleanup} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Tools from './listing.scene';
import enhancer from './listing.enhancer';
import {Provider} from 'react-redux';
import Immutable from 'seamless-immutable';

const mockStore = configureStore();

const mockRematchStore = (initialState, reducersAndEffects = {}) => {
  const store = mockStore(initialState);
  Object.assign(store.dispatch, reducersAndEffects);
  return store;
};

/**
|--------------------------------------------------
| Mocks
|--------------------------------------------------
*/

jest.mock('./components/tool-item/tool-item.component', () => props => (
  <div data-testid="tool-item" />
));
jest.mock(
  '../../common/components/searchfield/searchfield.component',
  () => props => <div data-testid="search-field" />
);
jest.mock(
  '../../common/components/checkbox/checkbox.component',
  () => props => <input data-testid="checkbox" {...props} />
);
jest.mock('../../common/components/button/button.component', () => props => (
  <button data-testid="Button" {...props} />
));
jest.mock('../../common/components/modal/modal.component', () => () => (
  <div data-testid="modal" />
));

/**
|--------------------------------------------------
| Tests
|--------------------------------------------------
*/

afterEach(cleanup);

describe('enhancer', () => {
  it('should run find when mount', () => {
    const EmptyComponent = () => null;
    const reduxStoreMock = {
      listing: Immutable({
        newToolModalOpened: false,
        confirmModal: {}
      }),
      tools: Immutable({
        data: [],
        filters: {}
      })
    };

    const dispatch = {
      listing: {},
      tools: {
        find: jest.fn()
      }
    };

    const store = mockRematchStore(reduxStoreMock, dispatch);

    const EnhancedComponent = enhancer(EmptyComponent);
    render(
      <Provider store={store}>
        <EnhancedComponent />
      </Provider>
    );
    expect(dispatch.tools.find).toHaveBeenCalled();
  });
});

describe('scene', () => {
  it('snapshot', () => {
    const {asFragment} = render(<Tools />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show tools', () => {
    const propsMock = {
      data: [
        {
          id: 3,
          title: 'fastify',
          link: 'https://www.fastify.io/',
          description:
            'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
          tags: ['a', 'b', 'c']
        },
        {
          title: 'test-tool',
          description: 'test-tool description wow',
          tags: ['d', 'e', 'f'],
          id: 5
        },
        {
          title: 'Feathers.js',
          description:
            'A REST and real-time API layer for Node.js, React Native and the browser.',
          link: 'https://feathersjs.com/',
          tags: ['g', 'h'],
          id: 6
        }
      ]
    };
    const {asFragment, queryAllByTestId} = render(<Tools {...propsMock} />);
    const tags = queryAllByTestId('tool-item');
    expect(asFragment()).toMatchSnapshot();
    expect(tags).toHaveLength(3);
  });
});
