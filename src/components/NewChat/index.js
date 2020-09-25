import React, { useState } from 'react';

import './styles.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const NewChat = ({ user, chatList, show, setShow }) => {
  const [list, setList] = useState([
    {
      id: 1234,
      avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Vinícius Mendite',
    },
    {
      id: 1234,
      avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Vinícius Mendite',
    },
    {
      id: 1234,
      avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Vinícius Mendite',
    },
    {
      id: 1234,
      avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Vinícius Mendite',
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--header">
        <div className="newChat--backbutton" onClick={handleClose}>
          <ArrowBackIcon style={{ color: '#FFF' }} />
        </div>
        <div className="newChat--headertitle">Nova Conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, index) => (
          <div className="newChat--item" key={index}>
            <img src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewChat;
