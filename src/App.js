import React, { Component } from 'react';
import './App.css';
import Toolbar from  './Components/Toolbar.jsx';
import MessageList from './Components/MessageList.jsx';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      messages: [1,2,3]
    }
  }
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <MessageList messages={this.state.messages}></MessageList>
          </div>
    );
  }
}

export default App;
