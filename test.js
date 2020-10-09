const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

const HtmlWebpackArray = []
const entries = {}



glob.sync('./src/pages/**/main.ts').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/main.ts')[0]
  entries[chunk] = path
  HtmlWebpackArray.push(new HtmlWebpackPlugin({
    inlineSource: ".(js|css)$",
    filename: chunk + '.html',
    template: "public/index.html",
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true
    },
    chunks: [chunk, "modules"],
    chunksSortMode: "auto"
  }))
  HtmlWebpackArray.push(new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin))
})

console.log('HtmlWebpackArray = ', HtmlWebpackArray);
console.log('entries = ', entries);
