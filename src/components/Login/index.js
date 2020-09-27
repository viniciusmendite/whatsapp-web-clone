import { RedoOutlined } from '@material-ui/icons';
import React from 'react';

import './styles.css';

import api from '../../services/api';

const Login = ({ onReceive }) => {
  const handleFacebookLogin = async () => {
    const result = await api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert('error');
    }
  };

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}>Logar com Facebook</button>
    </div>
  );
};

export default Login;
