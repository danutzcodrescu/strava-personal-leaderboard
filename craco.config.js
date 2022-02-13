const { getPlugin, pluginByName } = require('@craco/craco');
module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
    plugins: ['@babel/plugin-proposal-nullish-coalescing-operator'],
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'production') {
        let { isFound, match } = getPlugin(
          webpackConfig,
          pluginByName('ESLintWebpackPlugin')
        );
        if (isFound) {
          match.options.emitError = false;
        }
      }
      return webpackConfig;
    },
  },
};
