import {useDispatch} from 'react-redux';
import compose from '../../common/helpers/compose';
import withHooks from '../../common/helpers/with-hooks';

/**
|--------------------------------------------------
| Redux
|--------------------------------------------------
*/

export default compose(
  withHooks(props => {
    /** actions */
    const models = useDispatch();

    const actions = {
      create: models.tools.create
    };

    /** props */
    return {
      ...actions,
      ...props
    };
  })
);
