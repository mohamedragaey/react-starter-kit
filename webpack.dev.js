const merge = require('webpack-merge')
const common = require('./webpack.common')
const WebpackRTLPlugin = require('webpack-rtl-plugin')
const YarnAddWebpackPlugin = require('yarn-add-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: false,
      chunks: false,
      modules: false,
      reasons: true,
      children: true,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: true
    }
  },
  plugins: [
    new WebpackRTLPlugin({
      filename: 'css/app-rtl.css',
      diffOnly: false,
      minify: false
    }),
    // Install new npm packages when they used without being downloaded yet
    new YarnAddWebpackPlugin({
      // save dependencies as development or regular dependencies.
      dev: false,
      // Generate a lock file or don't. It's up to you!
      pure: false,
      // Install missing peerDependencies
      peerDependencies: true,
      // Reduce amount of console logging
      quiet: false,
    })
  ]
})
