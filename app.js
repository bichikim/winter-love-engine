const express = require('express')
const winterLove = require('winter-love')
const {join} = require('path')
const DEFAULT_PORT = 8080
const PORT = process.env.PORT || DEFAULT_PORT
const app = express()
app.enable('trust proxy')

async function run() {
  const winterLoveMiddleware = await winterLove({
    build: false,
    config: {
      dev: false,
      srcDir: join(__dirname, 'node_modules/winter-love/src'),
    },
  })
  app.use(winterLoveMiddleware)
  await new Promise((resolve) => {
    app.listen(PORT, resolve)
  })
}


run().then(() => (console.log('sever is running now')))