const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  // 关闭语法检查
  // devServer:{
  //   proxy:'http://localhost:5001',
  // }
  devServer:{
    proxy:{
      '/test':{
        target:'http://localhost:5001',
        pathRewrite:{'^/test':''},
        // ws: true, // 用于支持websocket  默认 true
        // changeOrigin: true, // 用于控制请求头中的host值 默认 true
      },
      '/demo':{
        target:'http://localhost:5002',
        pathRewrite:{'^/demo':''},
        // ws: true, // 用于支持websocket  默认 true
        // changeOrigin: true, // 用于控制请求头中的host值 默认 true
      },
    },
  }
})
