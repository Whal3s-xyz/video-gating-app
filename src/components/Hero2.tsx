import React from 'react';

const Hero2 = ({onStart}: {onStart: () => {}}) => {
    return (
        <div className="bg-base-100 drawer ">
            <div className="drawer-content" style={{scrollBehavior: 'smooth', scrollPaddingTop: '5rem'}}>
                <div>
                    <div
                        className="from-primary to-secondary text-primary-content -mt-[4rem]  grid place-items-center items-end bg-gradient-to-br pt-32">
                        <div
                            className="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row lg:items-end lg:gap-0 xl:gap-20">
                            <div className="lg:pl-10 lg:pb-32">
                                <div className="mb-2 py-4 text-center lg:py-10 lg:text-left">
                                    <div className="badge badge-outline mb-4 py-3 px-5 font-mono gap-2">⏳ <span
                                        className="text-xs">Whal3s x Livepeer</span></div>
                                    <h1 className="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-6xl">Token gate your videos with Livepeer and Whal3s</h1> <h2
                                    className="font-title text-lg font-extrabold sm:text-xl lg:text-2xl">Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute
                                    velit. Et
                                    labore commodo nulla aliqua proident mollit ullamco exercitation tempor.</h2></div>
                                <div
                                    className="flex w-full flex-col items-center space-y-10 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0">
                                    <div className="my-2 flex max-w-sm flex-col gap-2 text-left">
                                        <div className="flex gap-2">
                                            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            A free plugin for Tailwind CSS
                                        </div>
                                        <div className="flex gap-2">
                                            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            Faster development
                                        </div>
                                        <div className="flex gap-2">
                                            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            Cleaner HTML
                                        </div>
                                        <div className="flex gap-2">
                                            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            Customizable and themeable
                                        </div>
                                        <div className="flex gap-2">
                                            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            Pure CSS. Works on all frameworks
                                        </div>
                                    </div>
                                    <div
                                        className="mockup-code border-base-content w-full max-w-xs flex-1 border-2 border-opacity-20 bg-transparent pb-6 text-left text-current lg:mx-0">
                                        <pre data-prefix="$"><code>npm i daisyui</code></pre>
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-1 justify-center space-x-2 lg:mt-6 lg:justify-start"><a
                                    href="/components"
                                    className="btn btn-ghost btn-active lg:btn-lg normal-case"><span
                                    className="hidden sm:inline">See components</span> <span
                                    className="inline sm:hidden">Components</span></a> <a
                                                                                          href="/docs/install"
                                                                                          className="btn lg:btn-lg normal-case">How
                                    to use?</a></div>
                            </div>
                            <div>
                                <div className="w-full min-w-[330px] max-w-[350px] h-[100px]"/>
                            </div>
                        </div>
                        <svg className="fill-secondary col-start-1 row-start-1 h-auto w-full" width={1600} height={595}
                             viewBox="0 0 1600 595" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
