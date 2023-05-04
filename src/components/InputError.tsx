import React from 'react';

const InputError = ({children}: {children:any}) => {
    return (
        <p className="mt-2 text-sm text-red-600" id="email-error">
            {children}
        </p>
    );
};

export default InputError;
