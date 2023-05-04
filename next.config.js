/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    LIVEPEER_API_KEY: process.env.LIVEPEER_API_KEY,
    LIVEPEER_VALIDATION_WEBHOOK_ID: process.env.LIVEPEER_VALIDATION_WEBHOOK_ID,
    WHAL3S_LOGIN_UTLITY_ID: process.env.WHAL3S_LOGIN_UTLITY_ID,
    ALCHEMY_ETHEREUM_MAINNET_API_KEY: process.env.ALCHEMY_ETHEREUM_MAINNET_API_KEY,
    ALCHEMY_ETHEREUM_GOERLI_API_KEY: process.env.ALCHEMY_ETHEREUM_GOERLI_API_KEY,
    ALCHEMY_ETHEREUM_SEPOLIA_API_KEY: process.env.ALCHEMY_ETHEREUM_SEPOLIA_API_KEY,
    ALCHEMY_POLYGON_MAINNET_API_KEY: process.env.ALCHEMY_POLYGON_MAINNET_API_KEY,
    ALCHEMY_POLYGON_MUMBAI_API_KEY: process.env.ALCHEMY_POLYGON_MUMBAI_API_KEY,
  }
}

module.exports = nextConfig
