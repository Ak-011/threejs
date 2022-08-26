/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['assets.vercel.com', 'i0.wp.com', 'secure.gravatar.com'],
        formats: ['image/avif', 'image/webp'],
    },
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/consignor-price',
                destination: '/',
                permanent: true,
            },
            {
                source: '/terms',
                destination: '/terms-and-conditions',
                permanent: true,
            },
            {
                source: '/get-quote',
                destination: '/request-demo',
                permanent: true,
            },
            {
                source: '/partners',
                destination: '/integrations',
                permanent: true,
            },
            {
                source: '/products',
                has: [
                    {
                        type: 'query',
                        key: 'product',
                        value: 'ft-insight',
                    },
                ],
                destination: '/transportation-management-system-for-shippers',
                permanent: true,
            },
            {
                source: '/products',
                has: [
                    {
                        type: 'query',
                        key: 'product',
                        value: 'ft-suite',
                    },
                ],
                destination: '/transportation-management-system-for-shippers',
                permanent: true,
            },
            {
                source: '/products',
                has: [
                    {
                        type: 'query',
                        key: 'product',
                        value: 'ft-control',
                    },
                ],
                destination: '/transportation-management-system-for-shippers',
                permanent: true,
            },
            {
                source: '/products',
                has: [
                    {
                        type: 'query',
                        key: 'product',
                        value: 'ft-fulfil',
                    },
                ],
                destination: '/digital-freight-network-for-shippers',
                permanent: true,
            },
            {
                source: '/products',
                has: [
                    {
                        type: 'query',
                        key: 'product',
                        value: 'ft-trace',
                    },
                ],
                destination: '/visibility-for-shippers',
                permanent: true,
            },
            {
                source: '/products',
                destination: '/',
                permanent: true,
            },
            {
                source: '/category',
                destination: '/resources',
                permanent: true,
            },
            {
                source: '/category/blogs',
                destination: '/blogs',
                permanent: true,
            },
            {
                source: '/category/case-study',
                destination: '/case-study',
                permanent: true,
            },
            {
                source: '/category/media-coverage',
                destination: '/newsroom',
                permanent: true,
            },
            {
                source: '/category/newsroom',
                destination: '/newsroom',
                permanent: true,
            },
            {
                source: '/category/testimonials',
                destination: '/testimonials',
                permanent: true,
            },
        ];
    },
};
