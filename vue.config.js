// vue.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        }],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inlineSource: '.(js|css)$',
        template: 'public/index.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false
        }
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
      new OptimizeCSSPlugin({
        cssProcessorOptions: { safe: true, map: { inline: true } }
      })
    ]
  }
}
