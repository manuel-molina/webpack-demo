const path = require('path');
const loaders = require('./loaders');
const cssplugins = require('./css.plugins.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// Generate an HTML5 file for you that includes all your 
// webpack bundles in the body using script tags
const HtmlWebPackPlugin = require("html-webpack-plugin");
// remove all files inside webpack's output.path directory, 
// as well as all unused webpack assets after every successful rebuild
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ["./src/app.js"],  // the application entry point
  output: { // where to put bundles are and how to name these file
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    new HtmlWebPackPlugin({
      template: "src/index.html"
    }),
    cssplugins.StyleLintPlugin
  ],
  module: {
    rules: [
      loaders.JSLoader,
      loaders.ESLintLoader,
      loaders.CSSLoader
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },
};

