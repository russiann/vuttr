import {connect} from 'react-redux';
import compose from '../../common/helpers/compose';
import withLifecycle from '@hocs/with-lifecycle';

/**
|--------------------------------------------------
| Redux
|--------------------------------------------------
*/

const mapStateToProps = ({tools}) => ({
  data: tools.data,
  loading: tools.loading,
  error: tools.error,
  filters: tools.filters,
  newToolModalOpened: tools.newToolModalOpened,
  confirmModal: tools.confirmModal
});

const mapDispatchToProps = ({tools}) => ({
  find: tools.find,
  remove: tools.remove,
  setSearchText: tools.setSearchText,
  toggleFilterOnlyInTags: tools.toggleFilterOnlyInTags,
  toggleNewToolModal: tools.toggleNewToolModal,
  openConfirmModal: tools.openConfirmModal,
  closeConfirmModal: tools.closeConfirmModal
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLifecycle({
    onDidMount: ({find}) => find()
  })
);
