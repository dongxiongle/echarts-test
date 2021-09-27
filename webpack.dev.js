const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base');

const devConfig = merge({
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    port: 8082,
    open: true
  }
}, baseConfig)

module.exports = devConfig;