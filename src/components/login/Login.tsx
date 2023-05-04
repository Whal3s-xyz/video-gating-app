import React, {useEffect, useState} from 'react';
import Whal3s, {NftValidationUtility} from '@whal3s/whal3s.js'
import Uninitialized from "@/components/login/Uninitialized";
import ConnectWalletButton from "@/components/login/ConnectWalletButton";
import SignMessageButton from "@/components/login/SignMessageButton";
import notify from "@/lib/notify";
import axios from "axios";
import useServerRefresher from "@/hooks/useServerRefresher";
import {useRouter} from "next/router";

const Login = () => {

    const router = useRouter();

    const [utility, setUtility] = useState<NftValidationUtility | undefined>(undefined); // utility instance

    const [step, setStep] = useState<number>(0); // current step of the utility

    const [loading, setLoading] = useState(false); // loading state

    // initialize the utility
    const init = async () => {
        // initialize the Whal3s object and set the account center to bottom right
        const whal3s = new Whal3s({
            accountCenter: {
                mobile: {
                    enabled: true, // enable the account center on mobile
                    position: 'bottomRight', // position the account center to bottom right
                },
                desktop: {
                    enabled: true, // enable the account center on desktop
                    position: 'bottomRight', // position the account center to bottom right
                },
            }
        });
        // create the validation utility based on the utility id you saved to .env.local
        const _utility = await whal3s.createValidationUtility(process.env.WHAL3S_LOGIN_UTLITY_ID ?? '')
        // add event listeners to the utility to update the state whenever the utility goes over to the next step
        _utility.addEventListener('stepChanged', (event) => {
            setUtility(_utility)
            setStep(_utility.step)
        })
        // add event listener to the utility to login the user when the signature is signed by the user
        _utility.addEventListener('signed', () => {
            setUtility(_utility)
            login(_utility)
        })
        setStep(_utility.step)
        setUtility(_utility)
    }

    // login the user
    const login = async (utility: NftValidationUtility) => {
        setLoading(true)
        try {
            // call the login endpoint with the signature and wallet address and set the user according to the response
            const response = await axios.request({
                url: '/api/login',
                method: "POST",
                headers: {"Content-Type": "application/json"},
                data: {
                    signature: utility?.signature,
                    walletAddress: utility?.wallet?.address,

                },
            });

            if (response.status === 200) {
                notify('Success', 'Login successful')
                router.replace(router.asPath);
            } else {
                notify('Error', 'Login failed, Wallet not eligible')
            }
        } catch (e: any) {
            notify(e.message, 'Wallet not eligible')
        }

        setLoading(false)
    }

    useEffect(() => {
        // initialize the utility on component mount
        init()
    }, [])


    return (
        <div>
            {step === NftValidationUtility.STEP_UNINITIALIZED && <Uninitialized/>}
            {step === NftValidationUtility.STEP_INITIALIZED && utility && <ConnectWalletButton utility={utility}/>}
            {step >= NftValidationUtility.STEP_WALLET_CONNECTED && utility && !utility?.signature &&
                <SignMessageButton utility={utility}/>}
            {utility?.signature && <button
                onClick={() => {
                    login(utility)
                }}
                disabled={loading}
                className={`btn btn-primary max-lg:btn-sm ${loading ? 'loading' : ''}`}
            >{loading ? 'Logging in' : 'Log in'}</button>}
        </div>
    );
};

export default Login;
