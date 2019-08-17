module.exports = async ({config, mode}) => {
  config.module.rules.push({
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components|build|public)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['react-app'],
        plugins: [
          require('babel-plugin-emotion'),
          require('babel-plugin-jsx-control-statements')
        ]
      }
    }
  });
  return config;
};
