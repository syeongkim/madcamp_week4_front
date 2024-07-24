import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prefix = process.env.NODE_ENV === 'production' ? '/madcamp_week4_front/' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/madcamp_week4_front' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    });

    return config;
  },
  // Ensure no middleware usage when using static export
  experimental: {
    outputFileTracingRoot: __dirname,
  },
};

export default nextConfig;
