'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin');


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const name=process.env.name


// console.log(process.env.isStart)

module.exports = {
  name,
  context: path.resolve(__dirname, '../'),
  entry: {
    app: `./src/pages/${name}/main.js`
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // output: {
  //   path: path.resolve(__dirname, `../dist`),
  //   filename: '/js/[name].[hash:5].js',
  //   chunkFilename: 'js/[name].[hash:5].js'
  // },
  resolve: {
    extensions: ['.js', '.vue', '.json','styl','ts','scss',],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // '@': resolve('src/common'),
      '@':path.join(__dirname,'..','src','common')
    }
  },
  externals:{
    Vue:'Vue'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'postcss-loader', 'sass-loader']
      //   })
      // }
      // ,
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'postcss-loader']
      //   })
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test:/\.jade/,
        loader:'jade-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          publicPath:'../../',
          limit: 1000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
