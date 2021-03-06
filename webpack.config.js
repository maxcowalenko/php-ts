const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

const PATHS = {
  output: path.resolve(__dirname, 'dist')
}

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: '**/node_modules',
  },
  entry: './src/index.js',
  output: {
    path: PATHS.output,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
          ]
        }
      }
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ]
    }]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'public'), to: PATHS.output
      }, {
        from: path.resolve(__dirname, 'public/index.html'),
        to: 'index.html',
        transformAll(assets) {
          const result = assets.reduce((accumulator, asset) => {
            let content = asset.data.toString();

            content = content.replaceAll('%PUBLIC_URL%/', '')

            content = content.replaceAll('</head>', '<link rel="stylesheet" href="main.css">\n</head>')

            content = content.replaceAll('</body>', '<script src="main.js"></script>\n</body>')

            content = content.replace(new RegExp(/<!--[\s\S]*?-->/, 'g'), '')

            return content;
          }, '');

          return result;
        }
      }],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new LiveReloadPlugin({
      port: 8081,
      appendScriptTag: true
    })
  ]
}
