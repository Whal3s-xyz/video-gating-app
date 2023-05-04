import {NextApiRequest, NextApiResponse} from "next";
import {verify} from "jsonwebtoken";

const secret = process.env.JWT_TOKEN_KEY;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const {context, accessKey} = req.body;
        console.log(req.body)
        const utilityId = context.utilityId;
        if (!utilityId) throw new Error('No utility id provided');
        // @ts-ignore
        const decoded = verify(accessKey, secret);
        const walletAddress = decoded.walletAddress;

        const response = await fetch(`https://app.whal3s.xyz/api/v0/nft-validation-utilities/${utilityId}/wallet/${walletAddress}`)
        if (response.status !== 200) throw new Error('Invalid access key')
        const data = await response.json()
        if (data.valid === true)
            res.status(200).send('')
        else
            res.status(401).send('')

    } catch (e:any) {
        console.log(e.message)
        res.status(500).send('')
    }
}
