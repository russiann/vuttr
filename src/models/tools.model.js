import Immutable from 'seamless-immutable';
import services from '../services';

const tools = {
  name: 'tools',

  state: Immutable({
    data: [],
    loading: false,
    error: null
  }),

  reducers: {
    success: (state, data) => state.merge({data}),
    error: (state, error) => state.merge({error}),
    loading: (state, loading) => state.merge({loading})
  },

  effects: dispatch => ({
    async find() {
      try {
        const data = await services.tools.find();
        dispatch.tools.success(data);
      } catch (error) {
        dispatch.tools.error(error);
      }
    }
  }),

  logics: [
    {
      type: 'tools/find',
      latest: true,
      process(context, dispatch, done) {
        dispatch.tools.loading(true);
        done();
      }
    },
    {
      type: ['tools/success', 'tools/error'],
      latest: true,
      process(context, dispatch, done) {
        dispatch.tools.loading(false);
        done();
      }
    }
  ]
};

export default tools;
