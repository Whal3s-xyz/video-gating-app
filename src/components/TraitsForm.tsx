import {useForm} from "react-hook-form";
import {useContext, useEffect, useState} from "react";
import axios from 'axios';
import {bool} from "prop-types";
import {UtilityContext} from "@/modules/UtilityContext";
import Network from "@/lib/network";
import FormLayout from "@/components/FormLayout";
import InputError from "@/components/InputError";
import AlchemyApi from "@/lib/AlchemyApi";


type TraitsProps = {
    [key: string]: {
        [key: string]: number
    };
}
export default function TraitsForm({setNextValid}: {
    setNextValid: (nextValid: boolean) => void,
}) {
    const {state, dispatch} = useContext(UtilityContext);


    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isValid},
        getValues,
        setValue,
        trigger,
        clearErrors
    } = useForm({
        defaultValues:  {
            trait: state.trait,
            traitValue: state.traitValue,
        }
    });


    const watchTrait = watch("trait", state.trait); // you can supply default value as second argument

    // @ts-ignore

    const onSubmit = data => onComplete(data);
    const [isLoadingTraits, setIsLoadingTraits] = useState(false);
    const [traits, setTraits] = useState<TraitsProps>({});
    useEffect(() => {
        setIsLoadingTraits(true)

        const network=  new Network(state.network ?? Network.ETH_MAINNET.key)
        AlchemyApi.summarizeNFTAttributes(network, state.contractAddress?? '')
            .then(function (response) {
                setTraits(response.data.summary)
                setValue('trait', state.trait)
                setValue('traitValue', state.traitValue)
                trigger()
            })
            .catch(function (error) {
                console.error(error);
            }).finally(() => {
            setIsLoadingTraits(false)
        });

        return () => {

        };
    }, []);



    useEffect(() => {
        if (isValid) {
            clearErrors()
            dispatch({type: 'SET_TRAIT_VALUE', payload: getValues().traitValue});
            dispatch({type: 'SET_TRAIT', payload: getValues().trait})
            setNextValid(true)
        } else {
            setNextValid(false)
        }
    }, [isValid]);

    useEffect(() => {
        setValue('traitValue', "")
        trigger()
    }, [watchTrait]);



    return (

        <>
            <section className="flex flex-col gap-4 w-full">
                <h2>Advanced Access Control</h2>
                <p>Optional: Let only specific holders from the collection see your content. To do this, select a trait (metadata) of the tokens so only holders of these can access.</p>

                {
                    Object.keys(traits).length ? (<div className={'grid md:grid-cols-2 gap-5 mt-8 max-w-full'}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Trait</span>
                            </label>
                            <select
                                {...register("trait")}
                                disabled={isLoadingTraits}
                                className="select select-bordered w-full">
                                <option value="">Select</option>
                                {Object.keys(traits).map((trait) => (
                                    <option key={trait}
                                            value={trait}>{trait}</option>
                                ))}
                            </select>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Trait value</span>
                            </label>
                            <select
                                {...register("traitValue", {
                                    validate: {
                                        required: v => (!watchTrait || v) ? true : false,
                                    }
                                })}
                                disabled={!watchTrait || isLoadingTraits}
                                className="select select-bordered w-full">
                                <option value="">Select</option>
                                {watchTrait && traits[watchTrait] && Object.keys(traits[watchTrait])?.map((value) => (
                                    <option key={value} value={value}>{value}</option>
                                ))}
                            </select>

                        </div>
                    </div>) : (
                        <div className={'grid md:grid-cols-2 gap-5 mt-8 max-w-full'}>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Trait</span>
                                </label>
                                <input
                                    {...register("trait")}
                                    disabled={isLoadingTraits}
                                    className={`input input-bordered w-full max-w-xs ${errors.trait && 'input-error' }`}>
                                </input>

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Trait value</span>
                                </label>
                                <input
                                    {...register("traitValue", {
                                        validate: {
                                            required: v => (!watchTrait || v) ? true : false,
                                        }
                                    })}
                                    disabled={!watchTrait || isLoadingTraits}
                                    className={`input input-bordered w-full max-w-xs ${errors.traitValue && 'input-error' }`}>

                                </input>

                            </div>
                        </div>
                    )
                }
                {errors.trait &&
                    <InputError>Invalid trait</InputError>}
                {errors.traitValue && errors.traitValue.type === "required" &&
                    <InputError>Trait value is required if trait is set.</InputError>}


            </section>

        </>


    )
}
