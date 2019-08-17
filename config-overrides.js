const {override, addBabelPlugins} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('jsx-control-statements', 'emotion')
);
