/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@task-management/ui', '@task-management/shared'],
}

module.exports = nextConfig