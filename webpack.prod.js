const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const webpackProd = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
});

module.exports = webpackProd;
