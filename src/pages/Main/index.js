import React, { useState, useEffect } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from '../../components/ChatListItem';
import ChatIntro from '../../components/ChatIntro';

import './styles.css';

const App = () => {
  const [chatList, setChatList] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <div className="container">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="avatar"
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon className="stylebutton" />
            </div>
            <div className="header--btn">
              <ChatIcon className="stylebutton" />
            </div>
            <div className="header--btn">
              <MoreVertIcon className="stylebutton" />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" className="stylebutton-search" />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        <div className="chatlist">
          {chatList.map((item, index) => (
            <ChatListItem key={index} />
          ))}
        </div>
      </div>
      <div className="content-area">
        <ChatIntro />
      </div>
    </div>
  );
};
export default App;
