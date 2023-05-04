import React, {forwardRef, InputHTMLAttributes} from 'react';
type IInputProps = {
    label: string;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    valid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ valid, ...props }, ref) => {
    const validClasses = valid ? 'text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600' : 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500';

    return (
        <input
            className={`block w-full rounded-md border-0 py-1.5  ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${validClasses}`}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = 'Input';
export default Input;
