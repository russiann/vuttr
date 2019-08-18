const flow = (funcs = []) => (...args) =>
  funcs.forEach(func => {
    if (func) {
      func(...args);
    }
  });

export default flow;
