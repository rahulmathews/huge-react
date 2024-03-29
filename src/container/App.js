import React, {Component} from 'react';

//import Local styles here

import MenuComponent from '../components/MenuComponent';
import Wrapper from '../components/sections/Wrapper';

//Global scripts
import '../plugins/jquery';

class App extends Component {
  render(){

    return (
      <div data-ui-role="content">
        <MenuComponent />
        <Wrapper />
      </div>
    )
  }
}

export default App;
