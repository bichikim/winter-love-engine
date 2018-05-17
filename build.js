const winterLove = require('winter-love')
const {join} = require('path')

async function run() {
  await winterLove({
    build: true,
    config: {
      dev: false,
      srcDir: join(__dirname, 'node_modules/winter-love/src'),
    },
  })
}


run().then(() => (console.log('build done')))