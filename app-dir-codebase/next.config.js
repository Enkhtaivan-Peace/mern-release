/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: {
            ssr: true,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
        ],
    },
    env: {
        NEXT_BACKEND_URL: process.env.NEXT_BACKEND_URL,
    },
    output: 'standalone',
}

module.exports = nextConfig
