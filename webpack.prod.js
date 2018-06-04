const merge = require('webpack-merge')
const common = require('./webpack.common')
const WebpackRTLPlugin = require('webpack-rtl-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    }),
    new WebpackRTLPlugin({
      filename: 'css/app-rtl.css',
      diffOnly: false,
      minify: true
    })
  ]
})
