const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
      loader: 'babel-loader',
      options: {
      presets: ['@babel/preset-env']
    }
  }
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    },
  }
};

const CSSLoader = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: { 
        importLoaders: 1
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: __dirname + '/postcss.config.js',
          sourceMap: true
        }
      },
    },
  ],
};

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader
};
