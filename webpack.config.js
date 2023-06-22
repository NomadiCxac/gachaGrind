const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    inventory: "./src/inventory.js",
    shop: "./src/shop.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "",
  },
  devtool: "inline-source-map",
  devServer: {
    open: true,
    host: "localhost",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: (pathData) => {
            const folderPath = path.dirname(pathData.filename).replace(/^src\//, "");
            return `${folderPath}/[name][ext]`;
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: (pathData) => {
            const folderPath = path.dirname(pathData.filename).replace(/^src\//, "");
            return `${folderPath}/[name][ext]`;
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "gachaGrind.com",
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "Inventory - gachaGrind.com",
      template: "./src/inventory.html",
      filename: "inventory.html",
      chunks: ["inventory"],
    }),
    new HtmlWebpackPlugin({
      title: "Shop - gachaGrind.com",
      template: "./src/shop.html",
      filename: "shop.html",
      chunks: ["shop"],
    }),
    new MiniCssExtractPlugin({
      filename: "main.bundle.css",
    }),
  ],
};