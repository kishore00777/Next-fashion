/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      // Add other routes as needed
    };
  },
};

export default nextConfig;
