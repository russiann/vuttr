import Immutable from 'seamless-immutable';
import model from '../tools.model';
import service from '../../services';

describe('reducers', () => {
  it('loading', () => {
    const state = Immutable({
      loadings: {fetching: false, saving: false, removing: false}
    });

    const expectedState = {
      loadings: {fetching: true, saving: false, removing: false}
    };

    const nextState = model.reducers.loading(state, {
      type: 'fetching',
      value: true
    });

    expect(nextState.asMutable()).toStrictEqual(expectedState);
  });

  it('error', () => {
    const state = Immutable({
      errors: {fetching: null, saving: null, removing: null}
    });

    const expectedState = {
      errors: {fetching: null, saving: 'Error on saving!', removing: null}
    };

    const nextState = model.reducers.error(state, {
      type: 'saving',
      value: 'Error on saving!'
    });

    expect(nextState.asMutable()).toStrictEqual(expectedState);
  });

  it('setSearchText', () => {
    const state = Immutable({
      filters: {
        searchText: '',
        filterOnlyInTags: false
      }
    });

    const expectedState = {
      filters: {
        searchText: 'lorem ipsum',
        filterOnlyInTags: false
      }
    };

    const nextState = model.reducers.setSearchText(state, 'lorem ipsum');

    expect(nextState.asMutable()).toStrictEqual(expectedState);
  });

  it('toggleFilterOnlyInTags', () => {
    const state = Immutable({
      filters: {
        searchText: '',
        filterOnlyInTags: false
      }
    });

    const expectedState = {
      filters: {
        searchText: '',
        filterOnlyInTags: true
      }
    };

    const nextState = model.reducers.toggleFilterOnlyInTags(state, true);

    expect(nextState.asMutable()).toStrictEqual(expectedState);
  });

  it('success', () => {
    const state = Immutable({
      data: []
    });

    const expectedState = {
      data: [{id: 1}, {id: 2}]
    };

    const nextState = model.reducers.success(state, [{id: 1}, {id: 2}]);

    expect(nextState.asMutable()).toStrictEqual(expectedState);
  });

  it('saved', () => {
    const state = Immutable({
      saved: null
    });

    const expectedState = {
      saved: {id: 1}
    };

    const nextState = model.reducers.saved(state, {id: 1});

    expect(nextState.asMutable()).toStrictEqual(expectedState);
  });

  it('removed', () => {
    const state = Immutable({
      removed: null
    });

    const expectedState = {
      removed: {id: 1}
    };

    const nextState = model.reducers.removed(state, {id: 1});

    expect(nextState.asMutable()).toStrictEqual(expectedState);
  });
});

jest.mock('../../services');
beforeEach(() => jest.clearAllMocks());

describe('effects', () => {
  const dispatchMock = {
    tools: {
      loading: jest.fn(),
      error: jest.fn(),
      setSearchText: jest.fn(),
      toggleFilterOnlyInTags: jest.fn(),
      success: jest.fn(),
      saved: jest.fn(),
      removed: jest.fn()
    }
  };
  const effects = model.effects(dispatchMock);

  it('find: should set error if request fails', async () => {
    const resultMock = 'Error!';
    service.tools.find.mockRejectedValue(resultMock);

    await effects.find(null, {
      tools: {
        filters: {
          searchText: '',
          filterOnlyInTags: false
        }
      }
    });

    expect(service.tools.find).toBeCalledTimes(1);
    expect(dispatchMock.tools.error).toBeCalledWith({
      type: 'fetching',
      value: resultMock
    });
    expect(dispatchMock.tools.loading).toBeCalledTimes(2);
  });

  it('find: should set success if request succeed', async () => {
    const resultMock = {id: 1};

    service.tools.find.mockResolvedValue(resultMock);

    await effects.find(null, {
      tools: {
        filters: {
          searchText: '',
          filterOnlyInTags: false
        }
      }
    });

    expect(service.tools.find).toBeCalledTimes(1);
    expect(dispatchMock.tools.success).toBeCalledWith(resultMock);
    expect(dispatchMock.tools.loading).toBeCalledTimes(2);
  });

  it('create: should set error if request fails', async () => {
    const resultMock = 'Error!';
    const dataMock = {id: 1};
    service.tools.create.mockRejectedValue(resultMock);

    await effects.create(dataMock);

    expect(service.tools.create).toBeCalledWith(dataMock);
    expect(dispatchMock.tools.error).toBeCalledWith({
      type: 'saving',
      value: resultMock
    });
    expect(dispatchMock.tools.loading).toBeCalledTimes(2);
  });

  it('create: should set saved if request succeed', async () => {
    const resultMock = {id: 1};
    const dataMock = {id: 1};
    service.tools.create.mockResolvedValue(resultMock);

    await effects.create(dataMock);

    expect(service.tools.create).toBeCalledWith(dataMock);
    expect(dispatchMock.tools.saved).toBeCalledWith(resultMock);
    expect(dispatchMock.tools.loading).toBeCalledTimes(2);
  });

  it('remove: should set error if request fails', async () => {
    const resultMock = 'Error!';
    const idMock = 1;
    service.tools.remove.mockRejectedValue(resultMock);

    await effects.remove({id: idMock});

    expect(service.tools.remove).toBeCalledWith(idMock);
    expect(dispatchMock.tools.error).toBeCalledWith({
      type: 'removing',
      value: resultMock
    });
    expect(dispatchMock.tools.loading).toBeCalledTimes(2);
  });

  it('create: should set removed if request succeed', async () => {
    const resultMock = {id: 1};
    const idMock = 1;
    service.tools.remove.mockResolvedValue(resultMock);

    await effects.remove({id: idMock});

    expect(service.tools.remove).toBeCalledWith(idMock);
    expect(dispatchMock.tools.removed).toBeCalledWith(resultMock);
    expect(dispatchMock.tools.loading).toBeCalledTimes(2);
  });
});
