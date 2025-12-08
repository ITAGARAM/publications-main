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
      {
        source: '/',
        destination: '/blog',
        permanent: false, // set to true for SEO (301)
      },
    ];
  },
};

module.exports = nextConfig;
