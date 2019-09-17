import Immutable from 'seamless-immutable';
import services from '../services';
// import when from '../common/helpers/when-logic';

const model = {
  name: 'tools',

  /**
  |--------------------------------------------------
  | State
  |--------------------------------------------------
  */

  state: Immutable({
    data: [],
    saved: null,
    removed: null,

    filters: {
      searchText: '',
      filterOnlyInTags: false
    },

    loadings: {
      fetching: false,
      saving: false,
      removing: false
    },

    errors: {
      fetching: null,
      saving: null,
      removing: null
    }
  }),

  /**
  |--------------------------------------------------
  | Reducers
  |--------------------------------------------------
  */

  reducers: {
    loading: (state, {type, value}) => state.setIn(['loadings', type], value),
    error: (state, {type, value}) => state.setIn(['errors', type], value),

    setSearchText: (state, searchText) =>
      state.setIn(['filters', 'searchText'], searchText),
    toggleFilterOnlyInTags: state =>
      state.setIn(
        ['filters', 'filterOnlyInTags'],
        !state.filters.filterOnlyInTags
      ),

    success: (state, data) => state.merge({data}),
    saved: (state, saved) => state.merge({saved}),
    removed: (state, removed) => state.merge({removed})
  },

  /**
  |--------------------------------------------------
  | Effects
  |--------------------------------------------------
  */

  effects: dispatch => ({
    async find(payload, rootState) {
      const {filters} = rootState.tools;
      dispatch.tools.loading({type: 'fetching', value: true});
      try {
        const data = await services.tools.find(filters);
        dispatch.tools.success(data);
      } catch (error) {
        dispatch.tools.error({type: 'fetching', value: error});
      } finally {
        dispatch.tools.loading({type: 'fetching', value: false});
      }
    },

    async create(data) {
      dispatch.tools.loading({type: 'saving', value: true});
      try {
        const savedTool = await services.tools.create(data);
        dispatch.tools.saved(savedTool);
      } catch (error) {
        dispatch.tools.error({type: 'saving', value: error});
      } finally {
        dispatch.tools.loading({type: 'saving', value: false});
      }
    },

    async remove({id}, rootState) {
      dispatch.tools.loading({type: 'removing', value: true});

      try {
        const removedTool = await services.tools.remove(id);
        dispatch.tools.removed(removedTool);
      } catch (error) {
        dispatch.tools.error({type: 'removing', value: error});
      } finally {
        dispatch.tools.loading({type: 'removing', value: false});
      }
    }
  })
};

export default model;
