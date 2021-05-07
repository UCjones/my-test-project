import React, { useState } from 'react';

const URLCode = () => {
    const QRCode = require('qrcode.react');
    const [url, setUrl] = useState('');

    const ShowURL = (event) => {
        setUrl(event.target.value);
    }

    return (
     <div>
         <div className="title">URL</div>
        <div className="field">
            <label className="label">Link Url</label>
            <div className="control">
                <input className="input is link" type="text" placeholder="URL" onInput={ShowURL} />
            </div>
        </div>
        <div>
                <QRCode value={url} size={256} fgColor="black" />
          </div>
         </div>
   )
}


export default URLCode;