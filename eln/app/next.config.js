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
      // publications homepage
      {
        source: '/',
        destination: 'https://www.agaramtech.com/blog',
        permanent: true,
      },

      // publications blog posts
      {
        source: '/:slug',
        destination: 'https://www.agaramtech.com/blog/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;