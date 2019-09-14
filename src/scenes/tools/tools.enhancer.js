/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import compose from '../../common/helpers/compose';
import withHooks from '../../common/helpers/with-hooks';

/* eslint-disable react-hooks/exhaustive-deps  */
const onMount = fn =>
  useEffect(() => {
    fn();
  }, []);

export default compose(
  withHooks(props => {
    /** state */
    const tools = useSelector(state => state.tools.asMutable({deep: true}));

    const state = {
      data: tools.data,
      isFilterOnlyInTags: tools.filters.filterOnlyInTags,
      newToolModalOpened: tools.newToolModalOpened,
      confirmModal: tools.confirmModal
    };

    /** actions */
    const models = useDispatch();

    const actions = {
      remove: models.tools.remove,
      setSearchText: models.tools.setSearchText,
      toggleFilterOnlyInTags: models.tools.toggleFilterOnlyInTags,
      toggleNewToolModal: models.tools.toggleNewToolModal,
      openConfirmModal: models.tools.openConfirmModal,
      closeConfirmModal: models.tools.closeConfirmModal,
      onSearchText: models.tools.setSearchText,
      onTagClick: models.tools.setSearchText
    };

    /** side effects */
    onMount(models.tools.find);

    /** props */
    return {
      ...state,
      ...actions,
      ...props
    };
  })
);
