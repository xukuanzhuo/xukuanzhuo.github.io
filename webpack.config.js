const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/styles'),
        loader: 'style!css?modules&localIdentName=[name]__[local]!sass?sourceMap=true',
      }, {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/styles'),
        loader: 'style!css!sass?sourceMap=true',
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}
