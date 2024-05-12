const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                pathname: '/512/**',
            },
        ],
    },
    env: {
        BACKEND_BASE__URL: process.env.BACKEND_BASE__URL,
    },
};

module.exports = nextConfig;
