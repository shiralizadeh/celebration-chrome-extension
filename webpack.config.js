const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    serviceWorker: path.resolve(__dirname, "src", "serviceWorker.ts"),
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [],
};
