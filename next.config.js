/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'links.papareact.com', 'yt3.ggpht.com', 'platform-lookaside.fbsbx.com', 'firebasestorage.googleapis.com'],
  }
}
