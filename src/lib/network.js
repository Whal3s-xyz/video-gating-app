class Network {
    // Create new instances of the same class as static attributes
    static ETH_MAINNET = new Network("ETH_MAINNET")
    static ETH_GOERLI = new Network("ETH_GOERLI")
    static ETH_SEPOLIA = new Network("ETH_SEPOLIA")
    static MATIC_MAINNET = new Network("MATIC_MAINNET")
    static MATIC_MUMBAI = new Network("MATIC_MUMBAI")

    constructor(key) {
        this.key = key
    }

    name() {
        switch (this.key) {
            case 'ETH_MAINNET':
                return 'Ethereum Mainnet'
            case 'ETH_GOERLI':
                return 'Ethereum Görli (testnet)'
            case 'ETH_SEPOLIA':
                return 'Ethereum Sepolia (testnet)'
            case 'MATIC_MAINNET':
                return 'Matic Mainnet (Polygon)'
            case 'MATIC_MUMBAI':
                return 'Matic Mumbai (testnet)'
        }
    }

    static all() {
        return [
            Network.ETH_MAINNET,
            Network.ETH_GOERLI,
            Network.ETH_SEPOLIA,
            Network.MATIC_MAINNET,
            Network.MATIC_MUMBAI
        ];
    }

    apiUrl() {
        console.log(this.key)
        switch (this.key) {
            case 'ETH_MAINNET':
                return `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_ETHEREUM_MAINNET_API_KEY}/`
            case 'ETH_GOERLI':
                return `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_ETHEREUM_GOERLI_API_KEY}/`
            case 'ETH_GOERLI':
                return `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_ETHEREUM_SEPOLIA_API_KEY}/`
            case 'MATIC_MAINNET':
                return `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_POLYGON_MAINNET_API_KEY}/`
            case 'MATIC_MUMBAI':
                return `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_POLYGON_MUMBAI_API_KEY}/`
        }
    }

}

export default Network
