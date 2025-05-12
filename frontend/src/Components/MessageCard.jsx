import React from "react";

const MessageCard = ({ key, message }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      marginBottom: "10px",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)"
    }}>
      <p>{message.text}</p>
      <small>{message.date}</small>
    </div>
  );
};

export default MessageCard;
