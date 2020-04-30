const path = require('path');
const pxtoviewport = require('postcss-px-to-viewport');
const autoprefixer = require('autoprefixer');
function resolve (dir) {
    return path.join(__dirname, dir);
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
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
            // landscapeUnit: 'px',
            // landscape: true,
            // landscapeWidth: 95
          })
        ]
      }
    }
  }
};
