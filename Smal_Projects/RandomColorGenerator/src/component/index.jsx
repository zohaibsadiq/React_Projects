import { useEffect, useState } from 'react';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [Color, setColor] = useState('#000000');

  const handleCreateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  };
  const handleCreateRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b}) `);
  };

  useEffect(() => {
    if (typeOfColor === 'hex') {
      handleCreateHexColor();
    } else {
      handleCreateRgbColor();
    }
  }, [typeOfColor]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: Color }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '80vh',
          color: 'white',
          fontSize: '4rem',
        }}
      >
        <h1>{typeOfColor === 'rgb' ? 'RGB' : 'HEX'}</h1>
        <h2>{Color}</h2>
      </div>
    </div>
  );
};

export default RandomColor;
