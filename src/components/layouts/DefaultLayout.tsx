import React from 'react';
import Navbar from "@/components/Navbar";

const DefaultLayout = ({children, allBlack = false}:{children: any, allBlack?: boolean}) => {
    return (
        <div >
            <Navbar allBlack={allBlack}/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default DefaultLayout;
