/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: false,

  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },

  async redirects() {
    return [
      // homepage → new blog page
      {
        source: '/',
        destination: 'https://www.agaramtech.com/blog',
        permanent: true,
      },

      // old blog posts → new PHP blog URLs
      {
        source: '/:slug',
        destination: 'https://www.agaramtech.com/blog/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;