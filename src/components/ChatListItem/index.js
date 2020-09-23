import React from 'react';

import './styles.css';

const ChatListItem = ({ onClick, active }) => {
  return (
    <div className={`item-area ${active ? 'active' : ''}`} onClick={onClick}>
      <img
        className="avatar"
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="avatar"
      />
      <div className="lines">
        <div className="line">
          <div className="name">Vinícius Mendite</div>
          <div className="hour">01:00</div>
        </div>
        <div className="line">
          <div className="last-msg">
            <p>Opa, tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
