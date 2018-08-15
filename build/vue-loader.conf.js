'use strict'
const utils = require('./utils')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  extract:true,
  // loaders:[
  //   {
  //     test: /\.scss$/,
  //     use: ExtractTextPlugin.extract({
  //       fallback: 'vue-style-loader',
  //       use: ['css-loader', 'postcss-loader', 'sass-loader']
  //     })
  //   },
  //   {
  //     test: /\.stylus$/,
  //     use: ExtractTextPlugin.extract({
  //       fallback: 'vue-style-loader',
  //       use: ['css-loader', 'postcss-loader', 'stylus-loader']
  //     })
  //   },
  // ]
}
