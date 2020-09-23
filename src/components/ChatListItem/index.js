import React from 'react';

import './styles.css';

const ChatListItem = ({ data, onClick, active }) => {
  return (
    <div className={`item-area ${active ? 'active' : ''}`} onClick={onClick}>
      <img className="avatar" src={data.avatar} alt="avatar" />
      <div className="lines">
        <div className="line">
          <div className="name">{data.title}</div>
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
