/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL
  },
  images: {
    domains: ["loremflickr.com", "picsum.photos", "avatars.githubusercontent.com",]
  },
  async rewrites() {

    return [
      {
        source: '/uploads/:path*',
        destination: 'https://demo-shop-5jip.onrender.com/uploads/:path*'
      }
    ]
  }

}

module.exports = nextConfig
