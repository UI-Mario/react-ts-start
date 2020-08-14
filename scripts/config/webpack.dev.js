const { merge } = require('webpack-merge');
const { base } = require('./webpack.base');
const { SERVER_HOST, SERVER_PORT } = require('../constant');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    clientLogLevel: 'silent',
    compress: true, // 是否采用gzip压缩
    open: true,
    hot: true,
  },
});
