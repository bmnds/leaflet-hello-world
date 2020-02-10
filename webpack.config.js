const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: './dist',
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
    new CopyPlugin([
      { from: 'leaflet-gpx/dist/*.png', to: 'dist/images' },
    ]),
  ],
};
