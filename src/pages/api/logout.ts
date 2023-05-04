/* eslint-disable import/no-anonymous-default-export */
import { serialize } from "cookie";
import {NextApiRequest, NextApiResponse} from "next";
import {clearUser} from "@/web/tokens";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    clearUser(res);
    res.status(200).send('OK');
}
