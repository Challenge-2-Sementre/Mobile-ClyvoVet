const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Fix for Windows path issue with node:sea
config.server = {
  ...config.server,
  rewriteRequestUrl: (url) => {
    if (url.includes('node:sea')) {
      return url.replace(/node:sea/g, 'node-sea');
    }
    return url;
  },
};

// Configure resolver
config.resolver = {
  ...config.resolver,
  sourceExts: ['jsx', 'js', 'json', 'ts', 'tsx'],
};

module.exports = config;
