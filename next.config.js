/** @type {import('next').NextConfig} */
const nextConfig = {
    // Transpile specific modules to avoid issues with ESM/CJS compatibility
    // 转译特定模块以避免 ESM/CJS 兼容性问题
    transpilePackages: [
        '@aws-amplify/ui-react',
        '@aws-amplify/ui-react-core',
        'react-hook-form'
    ],
    // Resolve fallback for node modules required by Amplify
    // 解决 Amplify 所需的 Node 模块的后备方案
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            process: require.resolve('process/browser'),
        };

        return config;
    }
}

module.exports = nextConfig
