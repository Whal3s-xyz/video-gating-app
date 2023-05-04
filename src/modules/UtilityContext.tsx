// utility-context.tsx
import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import {Asset, CreateAssetSourceType, MirrorSizeArray} from "@livepeer/core/types";

// Define the types for the state
interface UtilityState {
    network: string | undefined;
    contractAddress: string | undefined;
    trait: string | undefined;
    traitValue: string | undefined;
    file: File | undefined;
    asset: any | undefined;
}

// Define the actions
type UtilityAction =
    | { type: 'SET_NETWORK'; payload: string|undefined }
    | { type: 'SET_CONTRACT_ADDRESS'; payload: string|undefined }
    | { type: 'SET_TRAIT'; payload: string|undefined }
    | { type: 'SET_TRAIT_VALUE'; payload: string|undefined }
    | { type: 'SET_FILE'; payload: File|undefined }
    | { type: 'SET_ASSET'; payload: any|undefined };

// Create the context
const UtilityContext = createContext<{
    state: UtilityState;
    dispatch: Dispatch<UtilityAction>;
}>({
    state: {
        network: undefined,
        contractAddress: undefined,
        trait: undefined,
        traitValue: undefined,
        file: undefined,
        asset: undefined,
    },
    dispatch: () => null,
});

// Create the reducer function
const utilityReducer = (state: UtilityState, action: UtilityAction): UtilityState => {
    switch (action.type) {
        case 'SET_NETWORK':
            return { ...state, network: action.payload };
        case 'SET_CONTRACT_ADDRESS':
            return { ...state, contractAddress: action.payload };
        case 'SET_TRAIT':
            return { ...state, trait: action.payload };
        case 'SET_TRAIT_VALUE':
            return { ...state, traitValue: action.payload };
        case 'SET_FILE':
            return { ...state, file: action.payload };
        case 'SET_ASSET':
            return { ...state, asset: action.payload };
        default:
            return state;
    }
};

// Create the UtilityProvider component
interface UtilityProviderProps {
    children: ReactNode;
}

const UtilityProvider: React.FC<UtilityProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(utilityReducer, {
        network: undefined,
        contractAddress: undefined,
        trait: undefined,
        traitValue: undefined,
        file: undefined,
        asset: undefined,
    });

    return (
        <UtilityContext.Provider value={{ state, dispatch }}>
            {children}
        </UtilityContext.Provider>
    );
};

export { UtilityContext, UtilityProvider };
