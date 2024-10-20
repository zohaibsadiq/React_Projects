import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  });

  const fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
        console.log(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAdvice = () => {
    fetchAdvice();
  };

  return (
    <>
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button onClick={handleAdvice} className='button'>
            GIVE ME ADVICE{' '}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
