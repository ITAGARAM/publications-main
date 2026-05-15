/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,

    images: {
        unoptimized: true,
    },

    eslint: {
        ignoreDuringBuilds: true,
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://www.agaramtech.com/blog',
                permanent: true,
            },
            {
                source: '/:slug/',
                destination: 'https://www.agaramtech.com/blog/:slug',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;