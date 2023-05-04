/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import {NextApiRequest, NextApiResponse} from "next";
import {authenticateUser} from "@/web/tokens";

const secret = process.env.JWT_TOKEN_KEY;

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const {walletAddress, signature} = req.body;

    const options = {method: 'GET', headers: {accept: 'application/json'}};
    try {
        const response = await fetch(`https://app.whal3s.xyz/api/v0/signature-messages?utility_id=${process.env.WHAL3S_LOGIN_UTLITY_ID}&wallet_address=${walletAddress}&signature=${signature}`, options)

        if (response.status !== 200)
            throw 'Invalid signature'

        const user  = {
            walletAddress: walletAddress
        }
        authenticateUser(res, user);
        res.status(200).json(user);

    } catch (error){
        console.log(error)
        res.status(403).json({message: (error as Error).message});
    }
}
