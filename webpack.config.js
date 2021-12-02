const webpack = require('webpack')
module.exports = {
  mode: 'production',
  watch: false,
  entry: './src/RTCIndex.native.ts',
  output: {
    // eslint-disable-next-line node/no-path-concat
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    libraryTarget: 'umd',
    library: 'easy',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
