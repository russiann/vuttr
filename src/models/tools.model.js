import Immutable from 'seamless-immutable';
import services from '../services';
import when from '../common/helpers/when-logic';

const tools = {
  name: 'tools',

  state: Immutable({
    data: [],
    loading: false,
    error: null,
    filters: {
      searchText: '',
      filterOnlyInTags: false
    }
  }),

  reducers: {
    success: (state, data) => state.merge({data}),
    error: (state, error) => state.merge({error}),
    loading: (state, loading) => state.merge({loading}),
    setSearchText: (state, searchText) =>
      state.merge({filters: {searchText}}, {deep: true}),
    toggleFilterOnlyInTags: state =>
      state.setIn(
        ['filters', 'filterOnlyInTags'],
        !state.filters.filterOnlyInTags
      )
  },

  effects: dispatch => ({
    async find(payload, rootState) {
      const {filters} = rootState.tools;
      try {
        const data = await services.tools.find(filters);
        dispatch.tools.success(data);
      } catch (error) {
        dispatch.tools.error(error);
      }
    }
  }),

  logics: [
    when('tools/find', ({tools}) => tools.loading(true)),
    when(['tools/success', 'tools/error'], ({tools}) => tools.loading(false)),
    when(['tools/setSearchText', 'tools/toggleFilterOnlyInTags'], ({tools}) =>
      tools.find()
    )
  ]
};

export default tools;
