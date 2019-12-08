import React from 'react';
import ReactDOM from 'react-dom';

//Global Styles
import './css/globals/index.css';
import './css/globals/menu.css';
import './css/globals/scrollSections.css';

//Main Container
import App from './container/App';


import * as serviceWorker from './serviceWorker';


//Main Entry Point
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
