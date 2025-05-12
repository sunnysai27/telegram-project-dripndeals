import React, { useState , useEffect } from 'react'
import {io} from "socket.io-client"

const socket = io("http://localhost:5000");

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
  // Fetch saved messages from DB on load
  fetch("http://localhost:4000/deals")
    .then(res => res.json())
    .then(data => {
      setMessages(data);
    });

  // Real-time updates from socket
  socket.on("new_message", (msg) => {
    setMessages(prev => [msg, ...prev]); // Prepend new message
  });

  return () => socket.off("new_message");
}, []);





  return (
    <div className="container">
      <h1>Top Deals & Offers</h1>
      <div className="cards">

        {messages.map((msg) => (
          
          <div key={msg.id} className="card">
            <a href={msg.url} target="_blank" rel="noopener noreferrer">
              <img src={msg.imagePath} alt="" style={{width: "200px",height: "150px"}} />
            </a>
            <p>{msg.title}</p>
            <a href={msg.url} target='_blank'>
              <button>Buy Now</button>
            </a>
            <small>{msg.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;