const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: resolve('src/main.ts')
  },
  module: {
    rules: [
      /* 处理 typescript 文件 */
      {
        test: /\.ts?$/,
        use: 'ts-loader',
      },
      /* 处理 html 文件 */
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      /* 处理 sass、scss 以及 css 文件 */
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          /* 此处的 publicPath: '../' 是相对于导出时的 ‘styles/’ 目录而言的 */
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      /* 处理图片文件 */
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name].[hash:8].[ext]'
        }
      },
      /* 处理字体文件 */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
          name: '[name].[hash:8].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: resolve('public/favicon.ico'),
      template: resolve('public/index.html'),
      filename: resolve('dist/index.html')
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    path: resolve('dist/')
  }
}
