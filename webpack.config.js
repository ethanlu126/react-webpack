const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');

const htmlPlug = new HTMLWebPackPlugin(
  {
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
  }
);

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.js|jsx$/ , use: 'babel-loader', exclude: /node_modules/} 
    ]
  },
  plugins: [
    htmlPlug
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
  },
};