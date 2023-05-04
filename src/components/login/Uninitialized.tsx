import React from 'react';

const Uninitialized = () => {

    //Nothing to do here, utility initializes itself
    return (
        <button
            className={`btn btn-primary max-lg:btn-sm loading`}
            onClick={() => {}}
           >Initializing</button>
    );
};

export default Uninitialized;
