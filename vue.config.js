const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  // THIS IS THE CRITICAL FIX
  publicPath: '/vue-art-store/'
})
