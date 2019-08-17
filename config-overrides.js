const {override, addBabelPlugins, addBabelPreset} = require('customize-cra');

module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop'),
  ...addBabelPlugins('jsx-control-statements', 'emotion')
);
