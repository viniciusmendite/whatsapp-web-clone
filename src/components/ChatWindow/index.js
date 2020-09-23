import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import './styles.css';

const ChatWindow = () => {
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerInfo">
          <img
            className="chatWindow--avatar"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="avatar"
          />
          <div className="chatWindow--name">Vinícius Mendite</div>
        </div>

        <div className="chatWindow--headerButtons">
          <div className="chatWindow--btn">
            <SearchIcon className="stylebutton" />
          </div>
          <div className="chatWindow--btn">
            <AttachFile className="stylebutton" />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon className="stylebutton" />
          </div>
        </div>
      </div>
      <div className="chatWindow--body" />
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div className="chatWindow--btn">
            <CloseIcon className="stylebutton" />
          </div>
          <div className="chatWindow--btn">
            <InsertEmoticonIcon className="stylebutton" />
          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input type="text" placeholder="Digite uma mensagem" />
        </div>
        <div className="chatWindow--pos">
          <div className="chatWindow--btn">
            <SendIcon className="stylebutton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
