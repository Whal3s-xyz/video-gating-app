import {useForm} from "react-hook-form";
import Network from "@/lib/network"
import {UtilityContext} from '@/modules/UtilityContext';
import {useCallback, useContext, useEffect, useMemo, useState} from "react";
import FormLayout from "@/components/FormLayout";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import axios from "axios";
import Whal3sApi from "@/lib/Whal3sApi";

interface FormInputs {
    network: string;
    contractAddress: string;
}

export default function SmartContractForm({setNextValid}: {
    setNextValid: (nextValid: boolean) => void,
}) {

    const {state, dispatch} = useContext(UtilityContext);

    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors, isValid},
        trigger,
        watch
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            network: state.network ?? "",
            contractAddress: state.contractAddress ?? "",
        }
    });

    const watchNetwork = watch("network", state.network); // you can supply default value as second argument
    const watchContractAddress = watch("contractAddress", state.contractAddress); // you can supply default value as second argument


    const [isValidating, setIsValidating] = useState(false);
    const [isAbiValid, setIsAbiValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const checkAbiCallback = useCallback(async () => {return await Whal3sApi.checkAbi(new Network(watchNetwork), watchContractAddress )   }, [watchContractAddress, watchNetwork])


    const revalidate = async () => {
        console.log('revalidate')
        setIsValidating(true)
        const triggerResult = await trigger()
        console.log(triggerResult)
        console.log({isValid})
        if (triggerResult) {
            if (state.contractAddress !== getValues().contractAddress || state.network !== getValues().network) {
                dispatch({type: 'SET_TRAIT_VALUE', payload: ''});
                dispatch({type: 'SET_TRAIT', payload: ''})
            }
            console.log('setting Network and contract address', getValues().network, getValues().contractAddress, isValid)
            dispatch({type: 'SET_NETWORK', payload: getValues().network});
            dispatch({type: 'SET_CONTRACT_ADDRESS', payload: getValues().contractAddress})
            setIsAbiValid(await checkAbiCallback())
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
        setIsValidating(false)
    }




    useEffect(() => {
        revalidate()
    }, []);
    useEffect(() => {
        revalidate()
    }, [watchNetwork, watchContractAddress]);

    useEffect(() => {
        setNextValid(isFormValid && isAbiValid)
    }, [isFormValid, isAbiValid]);


    return (

        <>
            <section className="flex flex-col gap-4 w-full">

                <div className="flex justify-between items-center space-x-2">
                    <div>
                        <h2>Select Eligible Tokens</h2>
                        <p>Please choose the network your tokens have been issued on and paste the smart contract address of the collection you want to give access to.</p>

                    </div>
                    <div>
                        {isValidating ? <div
                                className="relative w-6 h-6 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-whal3s-500 to-red-400 ">
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-alabaster rounded-full border-2 border-white"></div>
                            </div>
                            : <div className={'relative w-6 h-6'}></div>}
                    </div>

                </div>

                <div className="mt-8 form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Network</span>
                    </label>
                    <select
                        {...register("network", {required: true})}

                        className="select select-bordered w-full max-w-xs">
                        <option value="">Select Network</option>
                        {Network.all().map((network) => {
                            return <option key={network.key}
                                           value={network.key}>{network.name()}</option>
                        })}
                    </select>

                </div>
                <div className="mt-3 form-control w-full max-w-md	">
                    <label className="label">
                        <span className="label-text">Smart Contract Address</span>
                    </label>
                    <input
                        {...register("contractAddress", {
                            disabled: !watchNetwork,
                            required: true,
                            pattern: /^0x[a-fA-F0-9]{40}$/i
                        })}
                        type="text"
                        placeholder="0x..."
                        className={`input input-bordered w-full ${errors.contractAddress && 'input-error'}`}/>
                    {errors.contractAddress && errors.contractAddress.type === "pattern" &&
                        <InputError>Invalid contract address</InputError>}
                    {errors.contractAddress && errors.contractAddress.type === "required" &&
                        <InputError>This field is required</InputError>}

                    {isAbiValid === false && !isValidating && watchContractAddress && watchNetwork && <InputError>No verified contract found for network and contract address combination.</InputError>}
                </div>


            </section>

        </>


    )
}
