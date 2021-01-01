import path from 'path'

module.exports = {
  alias: {
    // alias a path to a fs directory
    // the key must start and end with a slash
    '/@components/': path.join(__dirname, 'src/components'),
    'vue': 'vue/dist/vue.esm-bundler.js'
  }
}

