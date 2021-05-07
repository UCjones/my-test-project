import React, { useState } from 'react';

const SmsCode = () => {
    const QRCode = require('qrcode.react')

    const [number, setNumber] = useState('');

    const ShowNumber = (event) => {
        setNumber(event.target.value);
    }

    const [message, setMessage] = useState('');

    const ShowMessage = (event) => {
        setMessage (event.target.value);
    }

    return (
        <div>
            <div className="field">
                <div className="label">Recipient's nos</div>
                <div className="control">
                    <input className="input" type="text" placeholder="Message" onInput={ShowNumber} />
                </div>
            </div>

            <div className="field">
                <div className="label">Message</div>
                <div className="control">
                    <textarea className="textarea" placeholder="Message" onInput={ShowMessage}></textarea>
                </div>
            </div>

            <div>
                <QRCode value={'SMS:${number}:${message}'} size={256} />
            </div>
        </div>    
    )
}

export default SmsCode;