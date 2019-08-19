import {connect} from 'react-redux';
import compose from '../../common/helpers/compose';

/**
|--------------------------------------------------
| Redux
|--------------------------------------------------
*/

const mapStateToProps = () => ({});

const mapDispatchToProps = ({tools}) => ({
  create: tools.create
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
