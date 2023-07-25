import React, { useState } from 'react';
import './ChatInput.css';
import firebase from 'firebase/compat/app';
import { useStateValue } from './StateProvider';
import db from './firebase';

function ChatInput({channelName,channelId}) {
  const [input,setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) =>{
    e.preventDefault();

    if (channelId) {
        db.collection("rooms").doc(channelId).collection("messages").add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userImage: user.photoURL,
        });
      }
      setInput("");
  }
  return (
    <div className='chatInput'>
      <form>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}
        placeholder={`Message #${channelName?.toLowerCase()}`}/>
        <button type="submit" on onClick={sendMessage}>Send</button>
      </form>
    </div>
  )
}

export default ChatInput
