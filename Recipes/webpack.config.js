var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"), // webpack was demanding absolute paths, this does the trick
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        // the book said I needed the following but this version of webpack apears not to support it
        // query: {
        //   presets: ["env", "stage-0", "react"],
        // },
      },
    ],
  },
  // I had some issues with webpack not finding fs and something called isexe, 
  // SO suggested the following:
  resolve: {
    fallback: {
      fs: false,
    },
  },
};
