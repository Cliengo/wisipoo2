const path = require('path');

const commonConfig = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  mode: 'production',
  devtool: 'source-map' 
};

const umdConfig = {
  ...commonConfig,
  entry: {
    index: './src/index.tsx',
    mod: './src/mod.tsx' // Keep if 'mod' is a deliberate separate entry
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].umd.js',
    library: {
      name: 'CliengoWisipoo', // Global variable name for UMD
      type: 'umd',
      umdNamedDefine: true,
    },
    globalObject: 'this',
    clean: true, // Clean dist only on the first output config
    iife: true, 
  },
};

const esmConfig = {
  ...commonConfig,
  entry: {
    index: './src/index.tsx',
    mod: './src/mod.tsx' // Keep if 'mod' is a deliberate separate entry
  },
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].mjs',
    library: {
      type: 'module',
    },
  },
};

module.exports = [umdConfig, esmConfig]; 