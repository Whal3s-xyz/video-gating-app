import axios from "axios";
import Network from "@/lib/network";

const Whal3sApi = {

    async checkAbi(network: Network, smartContract: string){
        try {
            const response = await axios.request({
                url: `https://app.whal3s.xyz/api/v0/abi?contract_address=${smartContract}&network=${network.key}`,
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            return response.status === 200
        } catch (e) {
            return false
        }

    }
}

export default Whal3sApi
