import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import MessageItem from '../MessageItem';

import api from '../../services/api';

import './styles.css';

const ChatWindow = ({ user, data }) => {
  const chatBody = useRef();

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setList([]);
    let unsub = api.onChatContent(data.chatId, setList, setUsers);
    return unsub;
  }, [data.chatId]);

  useEffect(() => {
    if (chatBody.current.scrollHeight > chatBody.current.offsetHeight) {
      chatBody.current.scrollTop =
        chatBody.current.scrollHeight - chatBody.current.offsetHeight;
    }
  }, [list]);

  let recognition = null;
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  const handleSendClick = () => {
    if (text !== '') {
      api.sendMessage(data, user.id, 'text', text, users);
      setText('');
      setEmojiOpen(false);
    }
  };

  const handleInputKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSendClick();
    }
  };

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerInfo">
          <img className="chatWindow--avatar" src={data.image} alt="avatar" />
          <div className="chatWindow--name">{data.title}</div>
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
      <div ref={chatBody} className="chatWindow--body">
        {list.map((item, index) => (
          <MessageItem key={index} data={item} user={user} />
        ))}
      </div>
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
            onKeyUp={handleInputKeyUp}
          />
        </div>
        <div className="chatWindow--pos">
          {text === '' && (
            <div className="chatWindow--btn" onClick={handleMicClick}>
              <MicIcon style={{ color: listening ? '#126ECE' : '#919191' }} />
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
