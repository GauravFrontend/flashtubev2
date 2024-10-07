/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "res.cloudinary.com",
      "via.placeholder.com",
    ], // Add the external domain here
  },
};

export default nextConfig;
