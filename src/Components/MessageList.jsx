import React from 'react';
import '../App.css';
import Message from './Message.jsx';

const MessageList = (props) => {
  return(
    props.messages.map(message => {
      return  <Message></Message>
      
    })
    
  );
}
export default MessageList;
