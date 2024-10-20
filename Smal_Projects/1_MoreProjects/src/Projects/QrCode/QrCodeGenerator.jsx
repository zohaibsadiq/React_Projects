import React from 'react';
import QRCode from 'react-qr-code';
import { useState } from 'react';

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleGenerateQrCode = () => {
    setQrCode(inputValue);
    setInputValue('');
  };
  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type='text'
          name='qr-code'
          placeholder='Enter your value here'
            value={inputValue}
        />
        <button
          disabled={inputValue && inputValue.trim() !== '' ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
        <div>
          <QRCode id='qr-code-value' value={qrCode} size={'400'} bgColor='white'/>
        </div>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
