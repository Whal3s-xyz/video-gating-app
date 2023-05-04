import axios from "axios";
import Network from "@/lib/network";

const AlchemyApi = {
    summarizeNFTAttributes:  async (network:Network, smartContract: string) => {
        const options = {
            method: 'GET',
            url: network.apiUrl()+'summarizeNFTAttributes',
            params: {contractAddress: smartContract},
            headers: {accept: 'application/json'}
        };

        return axios.request(options)
    }
}

export default AlchemyApi
