import React from 'react';

const Hero3 = ({onStart}: {onStart: () => void}) => {
    return (
        <div className="mx-auto mt-20 w-full max-w-7xl px-6 lg:px-8 h-[calc(100vh_-_7rem)]">
            <div className="w-full h-full relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32 xl:pt-44">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        <div className="mb-8 flex   justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                                Whal3s x Livepeer
                                {/*<a href="#" className="font-semibold text-white">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>*/}
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Token-gated videos made easy
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                The ideal utility for your tokens - give web3 users exclusive access to video content. Enabling you to build long-term relationships with your audience.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button
                                    onClick={onStart}
                                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                    Get started
                                </button>
                                <a href="https://docs.whal3s.xyz/docs/token-gate-a-video-with-livepeer-and-whal3s" target={'_blank'} className="text-sm font-semibold leading-6 text-white">
                                    View documentation <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient
                            id="759c1415-0410-454c-8f7c-9a820de03641"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(512 512) rotate(90) scale(512)"
                        >
                            <stop stopColor="#7775D6" />
                            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Hero3;
