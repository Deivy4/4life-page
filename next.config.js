/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Permitir imágenes desde Cloudinary
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
