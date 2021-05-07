import React, { useState } from 'react';

const EmailCode = () => {
    const QRCode = require('qrcode.react');

    const [mail, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const ShowMail = (event) => {
        setMail(event.target.value)
    }

    const ShowSubject = (event) => {
        setSubject(event.target.value)
    }

    const ShowBody = (event) => {
        setBody(event.target.value)
    }

    return (
        <div>
                    <div className="title">EMAIL</div>
                    <div className="field">
                        <label className="label">Mail To</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="URL" onInput={ShowMail} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Subject" onInput={ShowSubject} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Body</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Message" onInput={ShowBody}></textarea>
                        </div>
                    </div>

                    <div>

                        <div>
                            <QRCode value={`mailto:${mail}?subject=${subject}&body=${body}.`} size={256} />
                        </div>
                    </div>
             </div>

    )
}

export default EmailCode;
