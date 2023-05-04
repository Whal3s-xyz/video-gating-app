import React, {useState} from 'react';
import notify from "@/lib/notify";
import {NftValidationUtility} from "@whal3s/whal3s.js";

type Props = {
    utility: NftValidationUtility
}
const ConnectWalletButton = ({utility}: Props) => {
    const [loading, setLoading] = useState(false);
    const connectWallet = () => {
        setLoading(true)
        utility.connectWallet()
            .catch((e: any) => {
                notify('Error', e.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <button
            disabled={loading}
            className={`btn btn-primary max-lg:btn-sm ${loading ? 'loading' : ''}`}
            onClick={() => {
                connectWallet()
            }}>Connect Wallet</button>
    );
};

export default ConnectWalletButton;
