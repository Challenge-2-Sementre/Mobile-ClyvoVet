module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@screens': './src/screens',
            '@components': './src/components',
            '@interfaces': './src/interfaces',
            '@styles': './src/styles',
            '@data': './src/data',
            '@navigation': './src/navigation',
            '@services': './src/services',
          },
        },
      ],
    ],
  };
};
