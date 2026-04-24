/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://plus.unsplash.com/premium_photo-1677337458939-84d622293793
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
      // https://i.ibb.co/Xp3sL2h/1.png
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/Xp3sL2h/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
