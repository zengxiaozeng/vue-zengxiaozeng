// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {}
  },
  'globals': {
        "Swiper": true
    } //这个地方是新加入的   全局注入
}
