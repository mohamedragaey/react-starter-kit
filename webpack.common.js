const path = require('path')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackRTLPlugin = require('webpack-rtl-plugin')
const Visualizer = require('webpack-visualizer-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {

  entry: {
    main: ['./src/js/script.js', './src/scss/app.scss']
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  module: {
    rules: [
      // Rule For JS Standard
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          // Emit errors instead of warnings (default = false)
          error: false,
          // enable snazzy output (default = true)
          snazzy: true,
          // other config options to be passed through to standard e.g.
          parser: 'babel-eslint'
        }
      },

      // Rule For JS
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        use: [{
          loader: 'babel-loader'
        }]
      },

      // Rule For SCSS/SASS/CSS
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: ['node_modules'],
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',  // translates CSS into CommonJS
          'postcss-loader',
          'sass-loader', // compiles Sass to CSS
        ]
      },

      // Rule for images
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            },
          },
        ]
      },

      // Rule for Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]
  },
  plugins: [

    new CleanWebPackPlugin(['dist']),

    new MiniCssExtractPlugin({filename: 'css/app.css', chunkFilename: 'css/app.css'}),

    new WebpackRTLPlugin({
      filename: 'css/app-rtl.css',
      diffOnly: false,
      minify: process.env.NODE_ENV === 'production',
    }),

    new CopyWebpackPlugin([
        {from: 'src/fonts', to: './fonts'},
        {from: 'src/images', to: './images'},
        {from: 'src/favicon', to: './favicon'}
      ],
      {copyUnmodified: false}),

    new Visualizer(),

    new DashboardPlugin()
  ]
}
