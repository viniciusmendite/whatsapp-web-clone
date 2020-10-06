import React, { useState, useEffect } from 'react';

import './styles.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import api from '../../services/api';

const NewChat = ({ user, chatList, show, setShow }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        let results = await api.getContactList(user.id);
        setList(results);
      }
    };
    getList();
  }, [user]);

  const handleClose = () => {
    setShow(false);
  };

  const addNewChat = async (user2) => {
    // iniciando conversa entre 2 chats
    await api.addNewChat(user, user2);

    handleClose();
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
          <div
            onClick={() => addNewChat(item)}
            className="newChat--item"
            key={index}
          >
            <img src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewChat;
