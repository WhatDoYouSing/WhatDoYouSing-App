module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            api: './api',
            assets: './assets',
            components: './components',
            constants: './constants',
            contexts: './contexts',
            hooks: './hooks',
            navigation: './navigation',
            styles: './styles',
            types: './.expo/types',
          },
        },
      ],
    ],
  };
};
