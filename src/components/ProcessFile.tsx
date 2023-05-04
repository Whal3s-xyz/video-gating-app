import {useContext, useEffect, useMemo, useState} from "react";
import axios from 'axios';
import {UtilityContext} from "@/modules/UtilityContext";
import {CreateAssetFileProgress, useCreateAsset} from "@livepeer/react";
import {Asset, CreateAssetSourceType, MirrorSizeArray} from "@livepeer/core/types";
import {Transition} from "@headlessui/react";
import {loading} from "livepeer/dist/declarations/src/media/browser/styling/loading";
import Link from "next/link";


const steps = [
    {
        name: 'Creating utility',
        nameUpcoming: 'Create utility',
        nameCompleted: 'Utility created',
    },
    {
        name: 'Uploading file',
        nameUpcoming: 'Upload file',
        nameCompleted: 'File uploaded',
    },
    {
        name: 'Processing file',
        nameUpcoming: 'Process file',
        nameCompleted: 'File processed',
    },
    {
        name: 'Creating token gate',
        nameUpcoming: 'Create token gate',
        nameCompleted: 'Token gate created',
    }
]

const calculateStep = (utilityId: string | undefined, progress: readonly [CreateAssetFileProgress] | undefined, asset: MirrorSizeArray<CreateAssetSourceType, Asset> | undefined) => {
    // if (!utilityId || (progress?.[0].phase !== 'uploading' && progress?.[0].phase !== 'processing')) return 0;
    if (progress?.[0].phase === 'uploading') return 1;
    if (progress?.[0].phase === 'processing') return 2;
    if (asset) return 3;
    return 0;
}
export default function ProcessFile({}: {
}) {

    const {state, dispatch} = useContext(UtilityContext);
    const [utilityId, setUtilityId] = useState(undefined);
    const [isProcessing, setIsProcessing] = useState(false);
    const stepWidth = 90 / steps.length;

    const {
        mutate: createAsset,
        data: asset,
        status,
        progress,
        error,
    } = useCreateAsset(
        state.file && utilityId
            ? {
                sources: [
                    {
                        name: state.file.name,
                        file: state.file,
                        playbackPolicy: {
                            type: 'webhook',
                            // This is the id of the webhook you created in step 2
                            webhookId: process.env.LIVEPEER_VALIDATION_WEBHOOK_ID ?? '',
                            webhookContext: {
                                utilityId,
                            },
                        },
                    },
                ] as const,
            }
            : null,
    );

    const step = useMemo(() => calculateStep(utilityId, progress, asset), [utilityId, status, progress, asset]);


    const uploadFile = async () => {
        const response = await axios.post('/api/livepeer-gate', {
            contractAddress: state.contractAddress,
            network: state.network,
            trait: state.trait,
            traitValue: state.traitValue,
        })
        setUtilityId(response.data.utilityId);
    };

    useEffect(() => {
        if (state.file && utilityId) {
            createAsset?.()
        }
    }, [state.file, utilityId]);
    useEffect(() => {
        if (!!asset?.[0]) {
            dispatch({type: 'SET_ASSET', payload: asset[0]})
            setIsProcessing(false)
        }
    }, [asset]);


    const progressFormatted = useMemo(
        () =>
            progress?.[0].phase === 'failed'
                ? 'Failed to process video.'
                : progress?.[0].phase === 'waiting'
                    ? 'Waiting'
                    : progress?.[0].phase === 'uploading'
                        ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
                        : progress?.[0].phase === 'processing'
                            ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
                            : null,
        [progress],
    );


    useEffect(() => {
        setIsProcessing(true)
        uploadFile()
    }, []);


    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-lg font-medium text-gray-900">Creating gated video...</h4>
                        <p className="text-sm font-medium text-gray-900">{progressFormatted ?? steps[step].name}</p>

                    </div>
                    {isProcessing && <div
                        className="relative w-6 h-6 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-whal3s-500 to-red-400 ">
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-alabaster rounded-full border-2 border-white"></div>
                    </div>}
                </div>
                <div className="mt-8" aria-hidden="true">
                    <div className="overflow-hidden rounded-full bg-gray-200">
                        <div className="h-2 rounded-full bg-indigo-600 transition-all	"
                             style={{width: ((step * stepWidth) + ((Math.round((progress?.[0].progress ?? 0) * stepWidth)) + 10) + '%')}}/>
                    </div>
                    <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                        {steps.map((stepElement, stepIdx) => (
                            <div key={stepElement.name}
                                 className={`${step >= steps.length ? 'text-indigo-600' : ''} ${stepIdx === 0 ? '' : stepIdx === steps.length - 1 ? 'text-right' : 'text-center'}`}>{stepIdx > step ? stepElement.nameUpcoming : stepIdx < step ? stepElement.nameCompleted : stepElement.name}</div>
                        ))}

                    </div>
                </div>
            </div>
            <Transition
                show={!!asset?.[0]}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="alert alert-success mt-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                             fill="none"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Token gated video successfully created</span>
                    </div>
                    <div className="flex-none">
                        <Link href={`/video/${asset?.[0]?.playbackId}`} className="btn btn-sm btn-primary">View</Link>
                    </div>
                </div>
            </Transition>

        </div>

    )
}
