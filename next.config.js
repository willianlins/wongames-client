/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true
// }
// module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  customWorkerDir: 'serviceworker',
  disabled: !isProd
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true
})
