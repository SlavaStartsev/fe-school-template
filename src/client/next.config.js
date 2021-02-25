const {} = process.env;

const nextConfig = {
  distDir: '../../.next',
  assetPrefix: '',
  compress: false,
  useFileSystemPublicRoutes: false,
  cssLoaderOptions: {
    camelCase: true,
    namedExport: true,
    localIdentName:
      process.env.NODE_ENV === 'production'
        ? '[hash:base64]'
        : '[local]___[hash:base64:5]',
  },
  publicRuntimeConfig: {},
  env: {},
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  webpack(config, { dev, defaultLoaders }) {
    config.resolve.modules.push('./src/client');

    // fix Uncaught TypeError: (intermediate value)(intermediate value).push is not a function
    config.output.jsonpFunction = 'jsonpFunction';
    // fix dotenv flow can not resolve fs
    config.node.fs = 'empty';

    // if (dev) {
    //   defaultLoaders.css.unshift({
    //     loader: 'dts-css-modules-loader',
    //     options: {
    //       namedExport: false,
    //       banner: '// This file is generated automatically',
    //     },
    //   });
    // }

    return config;
  },
};

module.exports = nextConfig;
