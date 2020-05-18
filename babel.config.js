module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
      [
        // Prevent needed to add jsx pragma to every file
        // https://github.com/system-ui/theme-ui/issues/227#issuecomment-591659709
        '@emotion/babel-plugin-jsx-pragmatic',
        {
          module: 'theme-ui',
          import: 'jsx',
          export: 'jsx',
        },
      ],
      '@babel/plugin-proposal-object-rest-spread',
    ],
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  };
};
