module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            actions: './src/actions',
            api: './src/api',
            components: './src/components',
            utils: './src/utils'
          },
        },
      ],
    ],
  };
};
