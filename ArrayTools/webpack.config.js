var path = require('path');

module.exports = {
  entry: './scripts/main.js',
  output: {
    path: path.resolve(__dirname)+"/build",
    filename: '_bundle.js'
  },
  mode: 'development'
};

