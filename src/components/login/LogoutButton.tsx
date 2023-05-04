import React, {useState} from 'react';
import {NftValidationUtility} from "@whal3s/whal3s.js";
import axios from "axios";
import notify from "@/lib/notify";
import {useRouter} from "next/router";


const LogoutButton = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const logout = async () => {
        setLoading(true)
        try {
            // call the Logout endpoint
            const response = await axios.request({
                url: '/api/logout',
                method: "POST",
                headers: {"Content-Type": "application/json"},
            });

            if (response.status === 200) {
                notify('Success', 'Logout successful')
                router.replace(router.asPath);
            } else {
                notify('Error', 'Logout failed.')
            }
        } catch (e: any) {
            notify(e.message, 'Something went wrong')
        }

        setLoading(false)
    }

    return (
        <button type={'button'} className={'btn max-lg:btn-sm'} onClick={logout}>Logout</button>
    );
};

export default LogoutButton;
