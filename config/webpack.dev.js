const Merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonConfig = require('./webpack.common')

module.exports = Merge(commonConfig, {
  /* 开发环境 */
  mode: 'development',
  /* 启用 source map 用于定位错误 */
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].bundle.css',
      chunkFilename: 'styles/[id].css',
    })
  ],
  output: {
    filename: 'scripts/[name].bundle.js'
  },
  /* 本地服务器相关配置 */
  devServer: {
    contentBase: 'dist/',
    compress: true,
    port: 3000,
    hot: true
  }
})
