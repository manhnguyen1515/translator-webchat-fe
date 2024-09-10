const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@secondary-color': "#A5A7AD", '@primary-color': "#3C65F6" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};