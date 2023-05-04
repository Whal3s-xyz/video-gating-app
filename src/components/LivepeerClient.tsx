import React from 'react';
import {
    LivepeerConfig,
    ThemeConfig,
    createReactClient,
    studioProvider,
} from '@livepeer/react';
const LivepeerClient = ({children}:any) => {

    const livepeerClient = createReactClient({
        provider: studioProvider({
            apiKey: process.env.LIVEPEER_API_KEY ?? '',
        }),
    });

    const theme: ThemeConfig = {
        colors: {
            accent: 'rgb(0, 145, 255)',
            containerBorderColor: 'rgba(0, 145, 255, 0.9)',
        },
        fonts: {
            display: 'Inter',
        },
    };

    return (
        <LivepeerConfig client={livepeerClient} theme={theme}>
            {children}
        </LivepeerConfig>
    );
};

export default LivepeerClient;
