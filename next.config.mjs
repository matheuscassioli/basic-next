/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    output: "export",
    images: {
        unoptimized: true,
    },
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;