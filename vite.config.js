const { defineConfig } = require('vite')
const { resolve } = require('path')

module.exports = defineConfig({
  server: {
    allowedHosts: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        products: resolve(__dirname, 'products.html'),
        admin: resolve(__dirname, 'admin.html')
      }
    }
  }
})
