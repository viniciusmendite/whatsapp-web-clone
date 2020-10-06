import React, { useState, useEffect } from 'react';

import './styles.css';

const ChatListItem = ({ data, onClick, active }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    if (data.lastMessageDate > 0) {
      let d = new Date(data.lastMessageDate.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;

      setTime(`${hours}:${minutes}`);
    }
  }, [data]);

  return (
    <div className={`item-area ${active ? 'active' : ''}`} onClick={onClick}>
      <img className="avatar" src={data.image} alt="avatar" />
      <div className="lines">
        <div className="line">
          <div className="name">{data.title}</div>
          <div className="hour">{time}</div>
        </div>
        <div className="line">
          <div className="last-msg">
            <p>{data.lastMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
