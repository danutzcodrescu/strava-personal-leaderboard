const { getPlugin, pluginByName } = require('@craco/craco');
module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
    plugins: ['@babel/plugin-proposal-nullish-coalescing-operator'],
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      console.log(env);
      if (env === 'production') {
        const { isFound, match } = getPlugin(
          webpackConfig,
          pluginByName('ESLintWebpackPlugin')
        );
        if (isFound) {
          match.options.emitError = false;
          match.options.emitWarning = false;
        }
      }
      return webpackConfig;
    },
  },
};
