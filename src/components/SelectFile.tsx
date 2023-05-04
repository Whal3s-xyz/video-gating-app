import {useForm} from "react-hook-form";
import {useContext, useEffect, useState, useCallback} from "react";
import axios from 'axios';
import {bool} from "prop-types";
import FormLayout from "@/components/FormLayout";
import {UtilityContext} from "@/modules/UtilityContext";
import Network from "@/lib/network";
import {useDropzone} from 'react-dropzone';
import StyledDropzone from "@/components/StyledDropzone";

interface FormInputs {
    file: File | undefined;
}

export default function SelectFile({setNextValid}: {
    setNextValid: (nextValid: boolean) => void,
}) {

    const {state, dispatch} = useContext(UtilityContext);


    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
            dispatch({type: 'SET_FILE', payload: acceptedFiles[0]});
            setNextValid(true)
        }
    }, []);


    const dropzoneProps = {
        accept: {
            'video/*': ['*.mp4'],
        },
        maxFiles: 1,
        onDrop,
    }


    return (

        <section className="flex flex-col gap-4 w-full">
            <h2>Upload Video File</h2>
            <p>Please upload the video file you want to make available for your defined audience.</p>
            <div className={'mt-8'}></div>
            <StyledDropzone config={dropzoneProps}/>
        </section>


)
}
