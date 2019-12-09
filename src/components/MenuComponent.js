import React from 'react';
// import {ReactDOM} from 'react-dom';

//Import Local Styles here

const MenuComponent = () => {
    return (
        <React.Fragment>
            <div id="menu">
                <button className="lines-button minus menu-toggle" id="main-menu-caller" type="button">
                    <span className="lines"></span>
                </button>
            </div>

            <div id="ui-layer">
                <div id="menu-wrapper">
                    {/* navigation start */}
                    <div id="main-menu">
                        <div className="menu-nav-wrapper">
                            <nav className="menu-nav">
                                <ul className="brackets">
                                    <li className="menu">
                                        <a className="menu-state active" href="/">Home</a>
                                    </li>
                                    <li className="menu">
                                        <a className="menu-state" href="/" id="fire-about">About</a>
                                    </li>
                                    <li className="menu">
                                        <a className="menu-state" href="/" id="fire-services">Services</a>
                                    </li>
                                    <li className="menu">
                                        <a className="menu-state" href="/" id="fire-photos">Photos</a>
                                    </li>
                                    <li className="menu">
                                        <a className="menu-state" href="/" id="fire-contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>{/* navigation end */}
                </div>{/* menu end */}
            </div>{ /*ui layer end  */}
        </React.Fragment>
    );
}

export default MenuComponent