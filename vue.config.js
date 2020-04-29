const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  publicPath: './',
  chainWebpack: (config)=>{
    config.resolve.alias
    .set('@/', resolve('src'))
    .set('@/assets',resolve('src/assets'))
    .set('@/components',resolve('src/components'))
    .set('@/router',resolve('src/router'))
    .set('@/mixins',resolve('src/mixins'))
    .set('@/utils',resolve('src/utils'))
    .set('@/static',resolve('src/static'))
    .set('@/store',resolve('src/store'))
    .set('@/views',resolve('src/views'))
  }
}