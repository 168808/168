const Merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonConfig = require('./webpack.common')

module.exports = Merge(commonConfig, {
  /* 生产环境 */
  mode: 'production',
  /* 启用 source map 用于定位错误 */
  devtool: 'nosources-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].bundle.[hash:8].css',
      chunkFilename: 'styles/[id].[hash:8].css',
    })
  ],
  output: {
    filename: 'scripts/[name].bundle.[hash:8].js',
    publicPath: './'
  }
})
