var path = require('path');

module.exports = {
  entry: './scripts/main.js',
  output: {
    path: path.resolve(__dirname)+"/build",
    filename: '_bundle.js'
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
        // JavaScript
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.less$/i,
          use: [
            // compiles Less to CSS
            "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
    ],
},
};

