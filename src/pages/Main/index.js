import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './styles.css';

const App = () => {
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

        <div className="search" />

        <div className="chatlist" />
      </div>
      <div className="contentarea">...</div>
    </div>
  );
};
export default App;
