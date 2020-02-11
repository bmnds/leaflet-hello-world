const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "singletonStyleTag" }
          },
          {
            loader: "css-loader",
            options: { url: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: "file-loader" }]
      },
      {
        test: /\.(gpx)$/,
        use: [{ loader: "file-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      //hash: true,
      template: 'src/index.html', //relative to root folder
      filename: "index.html", //relative to dist folder
      title: 'Leaflet.js',
      myPageHeader: 'Map with Basemap, Table of Contents and GPX rendering',
    })
  ]
};
