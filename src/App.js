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

  async componentDidMount(){
    let response = await fetch('http://localhost:8082/api/messages')
    let myJson = await response.json()
    this.setState({
      messages: myJson

    })
    }
  messageRead = (id) => {
    console.log('messageRead',id)
    const updatedMessages = this.state.messages.map(message =>{
      if (message.id === id){
        message.read =  !message.read;
      }
      return message;
    })

    this.setState({
      message: updatedMessages
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <MessageList messages={this.state.messages} messageRead={this.messageRead}></MessageList>
          </div>
    );
  }
}

export default App;
