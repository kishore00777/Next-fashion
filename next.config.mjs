/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/Fashion",
  output: "export",
  distDir: "dist",
  reactStrictMode: true,
  // images: {
  //   loader: "custom",
  //   loaderFile: "./my-loader.js",
  // },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
