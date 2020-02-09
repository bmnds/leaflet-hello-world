module.exports = {
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
      }
    ]
  }
};
