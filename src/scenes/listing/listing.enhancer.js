/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import compose from '../../common/helpers/compose';
import withHooks from '../../common/helpers/with-hooks';
import withMemo from '../../common/helpers/with-memo';
import equals from '../../common/helpers/equals';

/* eslint-disable react-hooks/exhaustive-deps  */
const onMount = fn =>
  useEffect(() => {
    fn();
  }, []);

export default compose(
  withHooks(props => {
    /** state */
    const tools = useSelector(state => state.tools.asMutable({deep: true}));
    const listing = useSelector(state => state.listing.asMutable({deep: true}));

    const state = {
      data: tools.data,
      isFilterOnlyInTags: tools.filters.filterOnlyInTags,
      newToolModalOpened: listing.newToolModalOpened,
      confirmModal: listing.confirmModal
    };

    /** actions */
    const models = useDispatch();

    const actions = {
      remove: models.tools.remove,
      setSearchText: models.tools.setSearchText,
      toggleFilterOnlyInTags: models.tools.toggleFilterOnlyInTags,
      onSearchText: models.tools.setSearchText,
      onTagClick: models.tools.setSearchText,
      toggleNewToolModal: models.listing.toggleNewToolModal,
      openConfirmModal: models.listing.openConfirmModal,
      closeConfirmModal: models.listing.closeConfirmModal
    };

    /** side effects */
    onMount(models.tools.find);

    /** props */
    return {
      ...state,
      ...actions,
      ...props
    };
  }),
  withMemo(equals)
);
