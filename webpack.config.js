module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
        },
        {
          loader: "less-loader", // compiles Less to CSS
          options: {
            lessOptions: {
              // If you are using less-loader@5 please spread the lessOptions to options directly
              javascriptEnabled: true,
            },
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,

          type: "asset/resource",
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '/public/images/[name][contenthash].[ext]'
              }
            },
          ]
        },
      ],
      // ...other rules
    },
  ],
  // ...other config
};
