const path = require('path')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    main: ['./src/index.js', './src/styles/app.scss'],
    vendor: ['babel-polyfill', 'react', 'react-dom']
  },

  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          enforce: true,
          chunks: 'all',
        },
      }
    },
    runtimeChunk: true
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
        test: /\.s(a|c)ss$/,
        exclude: ['node_modules'],
        use: [
          // devMode ? 'style-loader' :
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
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
    new MiniCssExtractPlugin({filename: devMode ? 'css/app.css' : 'css/app.css'}),
    // Copy Fonts and Images From src to assets
    new CopyWebpackPlugin([
      {from: 'src/fonts', to: './fonts'},
      {from: 'src/images', to: './images'},
      {from: 'src/favicon', to: './favicon'}
    ], {
      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      copyUnmodified: false
    })
  ],
}
