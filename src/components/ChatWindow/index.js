import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import './styles.css';

const ChatWindow = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleMicClick = () => {};

  const handleSendClick = () => {};

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
      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? '200px' : '0' }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon className="stylebutton" />
          </div>
          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? '#009688' : '#919191' }}
            />
          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow--pos">
          {text === '' && (
            <div className="chatWindow--btn" onClick={handleMicClick}>
              <MicIcon className="stylebutton" />
            </div>
          )}
          {text !== '' && (
            <div className="chatWindow--btn" onClick={handleSendClick}>
              <SendIcon className="stylebutton" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
