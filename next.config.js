/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_ATLAS:
      'mongodb+srv://lushak:INTELLIGENTprogrammer1234@cluster0.i4kwt.mongodb.net/',
    MONGO_USER: 'lushak',
    MONGO_PW: 'INTELLIGENTprogrammer1234',
    MONGO_URI: 'cluster0.i4kwt.mongodb.net/',
    NEXTAUTH_SECRET: 'topsecrete&$',
    // or MONGODB_URI: 'mongodb+srv://xxxx.mongodb.net/?retryWrites=true&w=majority'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
