/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: '/:slug/',
        destination: 'https://www.agaramtech.com/blog/:slug/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;