const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md','mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
};

module.exports = withMDX(nextConfig)