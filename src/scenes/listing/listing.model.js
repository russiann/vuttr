import Immutable from 'seamless-immutable';
import when from '../../common/helpers/when-logic';

const model = {
  name: 'listing',
  /**
  |--------------------------------------------------
  | State
  |--------------------------------------------------
  */

  state: Immutable({
    newToolModalOpened: false,
    confirmModal: {
      opened: false,
      tool: {
        title: null
      }
    }
  }),

  /**
  |--------------------------------------------------
  | Reducers
  |--------------------------------------------------
  */

  reducers: {
    toggleNewToolModal: state =>
      state.set('newToolModalOpened', !state.newToolModalOpened),

    openConfirmModal: (state, tool) =>
      state.merge({confirmModal: {opened: true, tool}}),
    closeConfirmModal: state =>
      state.merge({confirmModal: {opened: false, tool: {title: null}}})
  },

  /**
  |--------------------------------------------------
  | Middlewares
  |--------------------------------------------------
  */

  logics: [
    when(['tools/saved'], ({listing}) => {
      listing.toggleNewToolModal();
    }),
    when(['tools/removed'], ({listing}) => {
      listing.closeConfirmModal();
    }),
    when(
      [
        'tools/toggleFilterOnlyInTags',
        'tools/setSearchText',
        'tools/saved',
        'tools/removed'
      ],
      ({tools}) => tools.find()
    )
  ]
};

export default model;
