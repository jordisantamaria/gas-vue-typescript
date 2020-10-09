const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname,'src/main.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'http://localhost:9000/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }]
      },
      {
        test: /\.css|postcss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 99999
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
  ],
}
