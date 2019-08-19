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
  newToolModalOpened: tools.newToolModalOpened
});

const mapDispatchToProps = ({tools}) => ({
  find: tools.find,
  setSearchText: tools.setSearchText,
  toggleFilterOnlyInTags: tools.toggleFilterOnlyInTags,
  toggleNewToolModal: tools.toggleNewToolModal
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
