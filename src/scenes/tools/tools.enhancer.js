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
  filters: tools.filters
});

const mapDispatchToProps = ({tools}) => ({
  find: tools.find,
  setSearchText: tools.setSearchText,
  toggleFilterOnlyInTags: tools.toggleFilterOnlyInTags
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
