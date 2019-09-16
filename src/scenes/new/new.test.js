import React from 'react';
import {render, cleanup, fireEvent, wait} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Immutable from 'seamless-immutable';
import New from './new.scene';
import enhancer from './new.enhancer';

const mockStore = configureStore();

const mockRematchStore = (initialState, reducersAndEffects = {}) => {
  const store = mockStore(initialState);
  Object.assign(store.dispatch, reducersAndEffects);
  return store;
};

/**
|--------------------------------------------------
| Tests
|--------------------------------------------------
*/

afterEach(cleanup);

describe('enhancer', () => {
  it('should pass props', () => {
    const EmptyComponent = jest.fn(() => null);
    const toolsStore = Immutable({});

    const create = () => {};

    const dispatch = {
      tools: {create}
    };

    const store = mockRematchStore({tools: toolsStore}, dispatch);

    const EnhancedComponent = enhancer(EmptyComponent);

    render(
      <Provider store={store}>
        <EnhancedComponent />
      </Provider>
    );

    expect(EmptyComponent).toHaveBeenCalledWith({create}, {});
  });
});

describe('scene', () => {
  it('snapshot', () => {
    const {asFragment} = render(<New />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call create prop with inputed data', async () => {
    const create = jest.fn();

    const {baseElement, getByTestId} = render(<New create={create} />);

    const saveButton = getByTestId('save-tool');

    const getFieldByName = name =>
      baseElement.querySelector(`[name="${name}"]`);

    fireEvent.change(getFieldByName('title'), {target: {value: 'lorem'}});
    fireEvent.change(getFieldByName('link'), {
      target: {value: 'http://google.com'}
    });
    fireEvent.change(getFieldByName('description'), {
      target: {value: 'description'}
    });
    fireEvent.change(getFieldByName('tags'), {target: {value: 'one'}});
    fireEvent.keyDown(getFieldByName('tags'), {keyCode: 13});
    fireEvent.change(getFieldByName('tags'), {target: {value: 'two'}});
    fireEvent.keyDown(getFieldByName('tags'), {keyCode: 13});

    fireEvent.click(saveButton);

    await wait(
      () => {
        expect(create).toHaveBeenCalledWith({
          description: 'description',
          link: 'http://google.com',
          tags: ['one', 'two'],
          title: 'lorem'
        });
      },
      {timeout: 1}
    );
  });
});
