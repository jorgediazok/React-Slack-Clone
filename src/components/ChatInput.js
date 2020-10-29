import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import '../styles/ChatInput.css';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chatInput">
      <form>
        <input placeholder={`Message # ${channelName?.toLowerCase()}`} />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
