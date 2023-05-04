import React, {useState} from 'react';
import notify from "@/lib/notify";
import {NftValidationUtility} from "@whal3s/whal3s.js";

type Props = {
    utility: NftValidationUtility
}
const SignMessageButton = ({utility}: Props) => {
    const [loading, setLoading] = useState(false);
    const sign = () => {
        setLoading(true)
        utility.sign()
            .catch((e: any) => {
                notify('Error', e.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (

        <button
            className={`btn btn-primary max-lg:btn-sm ${loading ? 'loading' : ''}`}
            onClick={() => {
                sign()
            }}>Sign Message</button>

    );
};

export default SignMessageButton;
