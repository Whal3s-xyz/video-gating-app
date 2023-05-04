import React, {MouseEventHandler} from 'react';

const Card = ({header, subheader, children, onBackClicked, onNextClicked, nextValid}: {
    header: string,
    subheader?: string,
    children: any,
    onBackClicked?: MouseEventHandler,
    onNextClicked?: MouseEventHandler,
    nextValid?: boolean
}) => {
    return (
        <div className={'mx-auto px-4 py-12 sm:px-6 lg:px-8'}>
            <div className={'mx-auto my-auto max-w-2xl'}>
                <div className="mx-auto my-auto  divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">{header}</h3>
                        <p className="mt-1 text-sm text-gray-500">{subheader}</p>
                    </div>
                    <div className="px-4 py-5 sm:p-6">{children}</div>
                    <div className="px-4 py-4 sm:px-6 flex items-center justify-between gap-x-6">
                        {onBackClicked ? <button onClick={onBackClicked}
                                 type="button"
                                 className="text-sm font-semibold leading-6 text-gray-900">
                            Back
                        </button> : <div/>}
                        {onNextClicked && <button
                            onClick={onNextClicked}
                            disabled={!nextValid}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Next
                        </button>}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Card;
