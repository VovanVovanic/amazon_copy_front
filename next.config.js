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
    console.log("rewrites called")
    return [
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:4200/uploads/:path*'
      }
    ]
  }

}

module.exports = nextConfig
