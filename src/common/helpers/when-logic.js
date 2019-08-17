const when = (actions, callback) => {
  const type = [].concat(actions);
  return {
    type,
    latest: true,
    process(context, dispatch, done) {
      const rootState = context.getState();
      callback(dispatch, {rootState, action: context.action});
      done();
    }
  };
};

export default when;
