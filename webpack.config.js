const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  optimization: {
    minimize: true
  },
  plugins: [new HtmlWebpackPlugin({
    filename: "test.html",
    template: "./src/test.html",
    minify: false,
    inject: false
  })],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          "html-loader?minimize=false",

        ]
      },
    ],
  },
};