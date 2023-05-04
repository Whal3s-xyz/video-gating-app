import React, {useContext, useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import {UtilityContext} from "@/modules/UtilityContext";
import {CheckCircleIcon, InformationCircleIcon} from '@heroicons/react/20/solid'
import {Property} from "csstype";
import FlexDirection = Property.FlexDirection;


const baseStyle:{
    padding: string;
    borderColor: string;
    backgroundColor: string;
    alignItems: string;
    color: string;
    flexDirection: FlexDirection;
    display: string;
    transition: string;
    outline: string;
    borderRadius: number;
    flex: number;
    borderWidth: number;
    borderStyle: string
} = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as FlexDirection,
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

export default function StyledDropzone({config}: any) {
    const {state, dispatch} = useContext(UtilityContext);

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({accept: {'image/*': []}, ...config});

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);


    return (
        <div>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
            </div>
            <aside >
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                    {state.file && <li key={state.file.name} className="flex gap-x-3">
                        <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
                        <span>
                            <strong className="font-semibold text-gray-900">{state.file.name}</strong> - {state.file.size} bytes
                        </span>
                    </li>}
                </ul>
            </aside>

        </div>
    );
}
