/**@type {import('next').NextConfig} */
const nextConfig ={
    // output:'export',
    // basePath:'/elnwebsitenext',
    trailingSlash:true,
    images:{
        unoptimized:true,
    },
    
    eslint: {
        ignoreDuringBuilds: true, //Ignores ESLint errors during the build process
    },
};
export default nextConfig;

