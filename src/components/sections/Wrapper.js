import React, {Component} from 'react';
import {ReactDOM} from 'react-dom';

//Import Local Styles here

import LogoSection from './LogoSection';

const Wrapper = () => {
    return (
        <div className="wrapper" id="wrapper" data-reactroot="">
            <div className="global-nav-background global-nav-background--active">
                <LogoSection />
            </div>
        </div>
    )
}

export default Wrapper