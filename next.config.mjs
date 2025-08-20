/** @type {import('next').NextConfig} */
const path = "path";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.builder.io",
        port: "",
        pathname: "/api/v1/image/**",
      },
    ],
  },
};

export default nextConfig;
