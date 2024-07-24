const prefix =
    process.env.NODE_ENV === 'production' ? 'https://syeongkim.github.io/madcamp_week4_front/' : ''

const nextConfig = {
    output: 'export',
    assetPrefix: prefix,
}