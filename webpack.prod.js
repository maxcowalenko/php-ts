const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  output: path.resolve(__dirname, 'dist')
}

module.exports = {
  mode: 'production',
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
            [
              '@babel/preset-env', {
                targets: {
                  edge: '13',
                  firefox: '53',
                  chrome: '55',
                  safari: '10'
                },
                useBuiltIns: 'usage',
                corejs: '3.11.1'
              }
            ],
            '@babel/preset-react',
            {
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-class-properties',
                '@babel/plugin-transform-computed-properties',
                '@babel/plugin-transform-shorthand-properties',
              ]
            }
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
    new PurgeCSSPlugin({
      paths: glob.sync(
        `${PATHS.src}/**/*`, {
        nodir: true
      }),
    }),
  ]
}