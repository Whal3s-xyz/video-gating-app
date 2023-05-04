import React from 'react';
import CreateTokenGatedVideo from "@/components/CreateTokenGatedVideo";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {UtilityProvider} from "@/modules/UtilityContext";
import LivepeerClient from "@/components/LivepeerClient";
import {useRouter} from "next/router";

const New = () => {

    const router = useRouter()

    return (
        <DefaultLayout allBlack={false}>
            <UtilityProvider>
                <LivepeerClient>
                    <CreateTokenGatedVideo onBack={() => {
                        router.push('/')
                    }}/>
                </LivepeerClient>
            </UtilityProvider>
        </DefaultLayout>
    );
};

export default New;
