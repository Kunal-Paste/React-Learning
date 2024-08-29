import React from 'react'
import QRCode from 'react-qr-code'

export default function QrGenerator() {
    return (
        <div>
            <h1>Qr Code Generator </h1>
            <div>
                <input type="text" name='qr-code' placeholder='Enter the value' />
                <button>Generate</button>
            </div>
            <div>
                <QRCode
                 id='qr-value'
                 value=''
                />
            </div>
        </div>
    )
}
