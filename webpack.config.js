const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TersetJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname,'src/main.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    // publicPath: 'http://localhost:3001/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  optimization: {
    minimizer: [
      new TersetJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
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
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
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
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      inlineSource: ".(js|css)$",
      template: "public/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunksSortMode: "auto"
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'js'
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [{ from: "gas" }]
    }),
    new CleanWebpackPlugin(),
  ],
}
