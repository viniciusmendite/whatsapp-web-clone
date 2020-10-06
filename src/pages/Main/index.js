import React, { useState, useEffect } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from '../../components/ChatListItem';
import ChatIntro from '../../components/ChatIntro';
import ChatWindow from '../../components/ChatWindow';
import NewChat from '../../components/NewChat';
import Login from '../../components/Login';

import './styles.css';
import api from '../../services/api';

const App = () => {
  const [chatList, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 'qLmLAjHmLpRkYKaX8jekKqBRwew1',
    name: 'Vinícius Mendite',
    avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
  });
  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(() => {
    if (user !== null) {
      let unsub = api.onChatList(user.id, setChatList);
      return unsub;
    }
  }, [user]);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
    };
    await api.addUser(newUser);
    setUser(newUser);
  };

  if (user === null) {
    return <Login onReceive={handleLoginData} />;
  }

  return (
    <div className="container">
      <div className="sidebar">
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="avatar" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon className="stylebutton" />
            </div>
            <div className="header--btn" onClick={handleNewChat}>
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
            <ChatListItem
              key={index}
              data={item}
              active={activeChat.id === chatList[index].id}
              onClick={() => setActiveChat(chatList[index])}
            />
          ))}
        </div>
      </div>
      <div className="content-area">
        {activeChat.id !== undefined && <ChatWindow user={user} />}
        {activeChat.id === undefined && <ChatIntro />}
      </div>
    </div>
  );
};
export default App;
