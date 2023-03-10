
import "./App.css";
import React from 'react';

import ChatBot from 'react-simple-chatbot';
import {Segment} from "semantic-ui-react";

function Chat() {
  
  const steps = [
    {
      id: "Greet",
      message: "dd",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Do you really want to return",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Yes",
          label: "yes",
          trigger: "Yes",
        },
        { value: "No", label: "No", trigger: "No" },
      ],
    },
    {
      id: "Yes",
      message:
        "Order return is successful",
      end: true,
    },
    {
      id: "No",
      message:
        "Order return is unsuccessful",
      end: true,
    }
  ];






  return (
    <>
    <Segment floated="right">
      <ChatBot steps={steps}/>
      
    </Segment>
    </>
  );
    
}

export default Chat;
