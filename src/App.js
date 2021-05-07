import './App.css';
import React from 'react';

import SmsCode from './components/SmsCode';
import EmailCode from './components/EmailCode';
import URLCode from './components/URLCode';
const App = () => {
  return (
    <div className="Container">
      <div className="Column1">
        <SmsCode />
      </div>
      <div className="Column2">
        <EmailCode />
      </div>
      <div className="Column1">
        <URLCode />
      </div>
    </div>
  );
}

export default App;