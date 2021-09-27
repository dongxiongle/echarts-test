const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const proConfig = merge(
  {
    mode: "production",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('postcss-preset-env')()
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin({
      filename: 'css/index.[fullhash:8].css'
    })],
  },
  baseConfig
);

module.exports = proConfig;
