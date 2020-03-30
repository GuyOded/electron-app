const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const glob = require("glob")

const mainProcessConfig = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./main/main.ts",
  },
  output: {
    path: path.resolve(__dirname, "out/electron"),
    filename: "main.js"
  },
  target: "electron-main",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        include: [
          path.resolve(__dirname, "main")
        ],
        use: "ts-loader",
        exclude: path.resolve(__dirname, "node_modules")
      }
    ]
  }
}

const rendererProcessConfig = {
  mode: "development",
  devtool: "source-map",
  entry: {
    app: glob.sync("./components/*.ts")
  },
  output: {
    path: path.resolve(__dirname, "out/components"),
    publicPath: "",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts"]
  },
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.css?$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.ts?$/,
        include: [
          path.resolve(__dirname, "components")
        ],
        use: 'ts-loader',
        exclude: path.resolve(__dirname, "node_modules")
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "components/index.html",
      inject: "head",
      scriptLoading: "defer"
    }),
    new MiniCssExtractPlugin({ filename: "style.css" })
  ]
}

module.exports = [mainProcessConfig, rendererProcessConfig]