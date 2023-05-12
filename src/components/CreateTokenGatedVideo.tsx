import React, {useContext, useEffect, useState} from 'react';
import SmartContractForm from "@/components/SmartContractForm";
import TraitsForm from "@/components/TraitsForm";
import SelectFile from "@/components/SelectFile";
import dynamic from "next/dynamic";
import {Sidebar} from "@/components/Sidebar";
import {UtilityContext} from "@/modules/UtilityContext";


type HeaderContent = {
    header: string,
    subheader: string
}


const DynamicProcessFile = dynamic(() => import('@/components/ProcessFile'), {
    ssr: false
})


const CreateTokenGatedVideo = ({onBack}: { onBack: () => void }) => {

    const [step, setStep] = useState('smartContractForm');
    const [nextValid, setNextValid] = useState(false);
    const {state, dispatch} = useContext(UtilityContext);


    useEffect(() => {
        setNextValid(false)
    }, [step]);

    const increseStep = () => {
        switch (step) {
            case 'smartContractForm':
                setStep('traitsForm')
                break;
            case 'traitsForm':
                setStep('fileForm')
                break;
            case 'fileForm':
                setStep('proceed')
                break;
            case 'proceed':
                setStep('success')
                break;
            default:
                setStep('smartContractForm')
        }
    }
    const decreaseStep = () => {
        switch (step) {
            case 'smartContractForm':
                onBack()
                break;
            case 'traitsForm':
                setStep('smartContractForm')
                break;
            case 'fileForm':
                setStep('traitsForm')
                break;
            case 'proceed':
                setStep('fileForm')
                break;
            case 'success':
                setStep('proceed')
                break;
            default:
                setStep('smartContractForm')
        }
    }

    return (

        // <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8 h-[calc(100vh_-_7rem)]">
        //     <div className="h-full relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32 xl:pt-44">

        <div className="h-screen w-full lg:max-w-7xl lg:px-8 lg:mx-auto lg:mt-20 lg:h-[calc(100vh_-_7rem)]">
            <div
                className="flex flex-col text-neutral-cool-gray grow lg:mx-auto lg:flex-row lg:p-4 lg:rounded-3xl lg:bg-white lg:shadow lg:h-full lg:relative lg:isolate lg:overflow-hidden lg:px-6 lg:py-6">
                <Sidebar currentStep={step} handleNextStep={() => {
                }}/>
                <div className="px-4 relative bg-neutral-magnolia  lg:bg-transparent lg:flex lg:flex-col lg:w-full ">
                    <div
                        className="bg-neutral-alabaster px-6 py-9 rounded-[0.625rem] -translate-y-[4.5rem] w-full grow [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary-marine-blue [&_h3]:font-medium [&_h3]:text-primary-marine-blue lg:bg-transparent lg:translate-y-0 ">
                        {step === 'smartContractForm' &&
                            <SmartContractForm
                                setNextValid={setNextValid}/>}
                        {step === 'traitsForm' &&
                            <TraitsForm
                                setNextValid={setNextValid}/>}
                        {step === 'fileForm' &&
                            <SelectFile
                                setNextValid={setNextValid}/>}
                        {step === 'proceed' &&
                            <DynamicProcessFile/>}
                    </div>
                    <menu className="flex justify-between px-6 mt-auto">
                        <li>
                            <button className="btn btn-ghost" onClick={decreaseStep}>Go Back</button>
                        </li>
                        <li>
                            {step !== 'proceed' && <button disabled={!nextValid}
                                    className={`btn btn-secondary`}
                                    onClick={() => nextValid && increseStep()}>
                                {step === 'traitsForm' && !state.trait  ? 'Skip': 'Next'}
                            </button>}
                        </li>
                    </menu>
                </div>
            </div>

            {/*</div>*/}
        </div>


    );
};

export default CreateTokenGatedVideo;
