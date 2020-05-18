const merge = require('webpack-merge');

const maxAssetSize = 1024 * 1024;

module.exports = {
  webpackFinal: (config) => {
    return merge(config, {
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30 * 1024,
          maxSize: maxAssetSize,
        },
      },
      performance: {
        maxAssetSize: maxAssetSize,
      },
    });
  },
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-viewport',
  ],
};
