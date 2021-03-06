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

  markAsReadButtonClicked = () => {
    console.log('markAsReadButtonLambchop')
    
  }

  messageSelected = (id) => {
    console.log('messageSelected', id)
    
    const updatedMessages = this.state.messages.map(message =>{
      if (message.id === id){
        message.selected =  !message.selected;
      }
      return message;
    })

    this.setState({
      message: updatedMessages
    })
  }
  
    messageRead = async (id) => {
    console.log('messageRead',id)
    let message = {
      messageIds: [id],
      command: "read",
      "read": true
    }

    const updateMessages = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    
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
        <Toolbar markAsReadButtonClicked={this.markAsReadButtonClicked}></Toolbar>
        <MessageList messages={this.state.messages} messageRead={this.messageRead} 
        messageSelected={this.messageSelected}></MessageList>
          </div>
    );
  }
}

export default App;
