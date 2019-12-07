import React, {Component} from 'react';
import {ReactDOM} from 'react-dom';

import '../css/Menu.css';

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
                        <div class="menu-nav-wrapper">
                            <nav class="menu-nav">
                                <ul class="brackets">
                                    <li class="menu">
                                        <a class="menu-state active" href="#">Home</a>
                                    </li>
                                    <li class="menu">
                                        <a class="menu-state" href="#" id="fire-about">About</a>
                                    </li>
                                    <li class="menu">
                                        <a class="menu-state" href="#" id="fire-services">Services</a>
                                    </li>
                                    <li class="menu">
                                        <a class="menu-state" href="#" id="fire-photos">Photos</a>
                                    </li>
                                    <li class="menu">
                                        <a class="menu-state" href="#" id="fire-contact">Contact</a>
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