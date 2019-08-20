import Immutable from 'seamless-immutable';
import services from '../services';
import when from '../common/helpers/when-logic';

const tools = {
  name: 'tools',

  state: Immutable({
    data: [],

    loadings: {
      fetching: false,
      saving: false,
      removing: false
    },

    errors: {
      fetching: null,
      saving: null,
      removing: null
    },

    filters: {
      searchText: '',
      filterOnlyInTags: false
    },

    newToolModalOpened: false,
    confirmModal: {
      opened: false,
      tool: {
        title: null
      }
    }
  }),

  reducers: {
    setLoading: (state, {type, value}) =>
      state.setIn(['loadings', type], value),
    setError: (state, {type, value}) => state.setIn(['loadings', type], value),

    setData: (state, data) => state.merge({data}),
    setSaved: state => state,
    setRemoved: state => state,

    setSearchText: (state, searchText) =>
      state.merge({filters: {searchText}}, {deep: true}),

    toggleFilterOnlyInTags: state =>
      state.setIn(
        ['filters', 'filterOnlyInTags'],
        !state.filters.filterOnlyInTags
      ),

    toggleNewToolModal: state =>
      state.set('newToolModalOpened', !state.newToolModalOpened),

    openConfirmModal: (state, tool) =>
      state.merge({confirmModal: {opened: true, tool}}),
    closeConfirmModal: state =>
      state.merge({confirmModal: {opened: false, tool: {title: null}}})
  },

  effects: dispatch => ({
    async find(payload, rootState) {
      const {filters} = rootState.tools;
      try {
        const data = await services.tools.find(filters);
        dispatch.tools.setData(data);
      } catch (error) {
        dispatch.tools.setError({type: 'fetching', value: error});
      }
    },

    async create(data) {
      try {
        const response = await services.tools.create(data);
        dispatch.tools.setSaved(response.data);
      } catch (error) {
        dispatch.tools.setError({type: 'saving', value: error});
      }
    },

    async remove(payload, rootState) {
      const {tool} = rootState.tools.confirmModal;
      try {
        const response = await services.tools.remove(tool.id);
        dispatch.tools.setRemoved(response.data);
      } catch (error) {
        dispatch.tools.setError({type: 'removing', value: error});
      }
    }
  }),

  logics: [
    when(['tools/toggleFilterOnlyInTags'], ({tools}) => tools.find()),
    when('tools/find', ({tools}) =>
      tools.setLoading({type: 'fetching', value: true})
    ),
    when('tools/create', ({tools}) =>
      tools.setLoading({type: 'saving', value: true})
    ),
    when(['tools/setData', 'tools/setError'], ({tools}) => {
      tools.setLoading({type: 'fetching', value: false});
      tools.setLoading({type: 'saving', value: false});
    }),
    when(['tools/setSaved'], ({tools}) => {
      tools.setLoading({type: 'saving', value: false});
      tools.toggleNewToolModal();
      tools.find();
    }),
    when(['tools/setRemoved'], ({tools}) => {
      tools.setLoading({type: 'removing', value: false});
      tools.closeConfirmModal();
      tools.find();
    })
  ]
};

export default tools;
