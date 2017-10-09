const $ = require('./helpers');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  entry: {
    'some-function': $.root('./src/some-function/some-function.ts')
  },
  output: {
    path: $.root('dist'),
    filename: '[name]/[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader?declaration=false',
        exclude: [/\.(spec|e2e)\.ts$/]
      }
    ]
  },
  plugins: [
    new uglifyJSPlugin({
      uglifyOptions: {
        ecma: 6
      }
    }),
    new copyWebpackPlugin([
      {
        from: 'src/host.json',
        to: 'host.json'
      },
      {
        context: 'src',
        from: '**/function.json',
        to: ''
      }
    ])
  ],
  node: {
    __filename: false,
    __dirname: false,
  }
};
