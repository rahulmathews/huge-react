import React, {Component} from 'react';
import {ReactDOM} from 'react-dom';

//Import Local Styles here

const LogoSection = () => {
    return (
        <React.Fragment>
            <button aria-hidden="true" classNamr="global-nav__hit-area" tabindex="-1">

            </button>
            <div aria-atomic="true" aria-live="polite" className="a11y-hint" role="status">

            </div>
            <button className="h-logo h-logo--magenta" id="header-logo-huge" tabindex="0">
                <div className="a11y-hint">Huge logo. Click to open navigation.</div>
                <div className="h-logo--wink" style={{"background-image":"url(img/hwink_sequence.png)"}}>

                </div>
                <svg className="h-logo__svg" viewBox="0 0 20 28" xmlns="http://www.w3.org/2000/svg" title="Menu">
                    <path className="h-logo__path" d="M35,24H28V51h7V41h6V51h7V24H41V34H35V24Z" transform="translate(-28 -24)"></path>
                </svg>
            </button>
        </React.Fragment>
    )
}

export default LogoSection