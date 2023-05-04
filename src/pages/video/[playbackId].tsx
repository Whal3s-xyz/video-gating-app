import React from 'react';
import LivepeerClient from "@/components/LivepeerClient";
import Hero3 from "@/components/Hero3";
import {useRouter} from "next/router";
import {GetServerSidePropsContext} from "next";
import {userFromRequest} from "@/web/tokens";
import dynamic from "next/dynamic";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {User} from "@/web/tokens";
import LogoutButton from "@/components/login/LogoutButton";

const DynamicLogin = dynamic(() => import('@/components/login/Login'), {
    ssr: false,
    loading: () => <button
        className={`btn btn-primary max-lg:btn-sm loading`}
        onClick={() => {
        }}
    >Initializing</button>,
})

const Player = dynamic(() => import('@livepeer/react').then((mod) => mod.Player), {ssr: false});

const Video = ({user}: {user?: User}) => {


    const router = useRouter()
    const {playbackId} = router.query
    return (
        <DefaultLayout allBlack={true}>
            <LivepeerClient>
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8 h-auto mb-20">
                    <div
                        className="h-full relative isolate overflow-hidden bg-gray-900 shadow-2xl rounded-3xl ">
                        <div className="border-b border-gray-200 text-white py-2.5 px-4 sm:py-5 sm:px-6">
                            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                                <div className="ml-4 mt-2">
                                    <h3 className="text-base font-semibold leading-6 text-white">Gated video</h3>
                                </div>
                                <div className="ml-4 mt-2 flex-shrink-0">
                                    {user?.token ? <LogoutButton/> : <DynamicLogin/>}
                                </div>
                            </div>
                        </div>
                        <div className={'mx-auto max-h-full max-w-full w-auto aspect-video'}>
                            <Player playbackId={playbackId as string} accessKey={user?.token}/>
                        </div>


                    </div>
                </div>


            </LivepeerClient>
        </DefaultLayout>

    );
};


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const user = await userFromRequest(context.req);

    if (!user) return {props: {}};

    return {
        props: {user},
    };
}

export default Video;
