/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prnewswire2-a.akamaihd.net',
      },
      {
        protocol: 'https',
        hostname: 'technotimes.info',
      },
      {
        protocol: 'https',
        hostname: 'rsvm.in',
      },
    ],
  },
};

export default nextConfig;
