import React from 'react';
// import {ReactDOM} from 'react-dom';

//Import Local Styles here

import LogoSection from './LogoSection';
import HomePageSection from './HomePageSection';
import FooterComponent from '../FooterComponent';

const Wrapper = () => {
    return (
        <div className="wrapper" id="wrapper" data-reactroot="">
            <div className="global-nav-background global-nav-background--active">
                <LogoSection />
                <HomePageSection />
                <FooterComponent />
            </div>
        </div>
    )
}

export default Wrapper