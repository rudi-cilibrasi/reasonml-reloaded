var LiveReloadPlugin = require('webpack-livereload-plugin');

var options = { };
module.exports = {
  mode: 'development',
  entry: './lib/js/src/Main.js',
  plugins: [
    new LiveReloadPlugin(options)
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
};

