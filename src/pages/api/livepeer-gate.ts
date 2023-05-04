import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";


type CreateNftvalidationUtilityRequest = {
    name: string,
    contract_address: string,
    network: string,
    requirements?: [
        {
            trait: string,
            conditionType: string,
            returnValueTest: {
                value: string
            }
        }
    ]
}

const createUtility = async (req: NextApiRequest, res: NextApiResponse) => {

    const {contractAddress, network, trait, traitValue} = req.body;
    const requestData:CreateNftvalidationUtilityRequest = {
        name: "Livepeer Showcase",
        contract_address: contractAddress,
        network: network
    }
    if (trait && traitValue) {
        requestData['requirements'] = [{"trait": trait, "conditionType": "trait", "returnValueTest": {"value": traitValue}}]

    }
    const options = {
        method: 'POST',
        url: 'https://app.whal3s.xyz/api/v0/nft-validation-utilities',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer '+process.env.WHAL3S_API_KEY
        },
        data: requestData

    };

    try {
        const utilityResponse = await axios.request(options)
        return utilityResponse.data.id

    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }


}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;

    switch (method) {
        case "POST":
            const utilityId = await createUtility(req, res);
            res.status(200).json({utilityId: utilityId})
            break;
        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
