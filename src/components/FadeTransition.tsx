// FadeTransition.js
import React, {Key} from 'react';
// import { CSSTransition } from 'react-transition-group';
import {CSSTransition} from 'react-transition-group'

const FadeTransition = ({key,  children }: {key: Key | null | undefined, children:any}) => (
    <CSSTransition
        key={key}
        timeout={500}
        classNames="fade"
        unmountOnExit
        mountOnEnter
    >
        {children}
    </CSSTransition>
);

export default FadeTransition;
