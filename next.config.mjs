/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: [
      "i.scdn.co",
      "t.scdn.co",
      "newjams-images.scdn.co",
      "dailymix-images.scdn.co",
      "seed-mix-image.spotifycdn.com",
      "charts-images.scdn.co",
      "daily-mix.scdn.co",
      "mosaic.scdn.co",
      "mixed-media-images.spotifycdn.com",
      "lineup-images.scdn.co",
      "thisis-images.scdn.co",
    ],
  },
}

export default nextConfig
