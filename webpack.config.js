/* eslint-env node */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath  = path.join(__dirname, 'src');
const destPath = path.join(__dirname, 'dist');

module.exports = {
  entry: {
    transion: path.join(srcPath, 'transion.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: destPath,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts'],
    mainFields: ['module', 'main', 'browser'],
    fallback: {
      path: false,
      fs: false
    }
  },
  stats: {
    builtAt: true,
    errorsCount: true,
    warningsCount: true,
    timings: true,
  }
}