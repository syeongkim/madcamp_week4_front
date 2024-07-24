const prefix =
  process.env.NODE_ENV === "production" ? "/madcamp_week4_front/" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: '/madcamp_week4_front',
  basePath: process.env.NODE_ENV === "production" ? "/madcamp_week4_front" : "",
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/",
          publicPath: `${prefix}fonts/`, // 폰트의 공개 경로 설정
        },
      },
    });

    return config;
  },
};

export default nextConfig;
