import { useEffect, useState } from 'react';

const Practice = () => {
  const [marks, setMarks] = useState([50, 50, 51, 52]);
  const [result, setresult] = useState({
    pass: 0,
    fail: 0,
  });
  const handleClick = (index, which) => {
    console.log(which);
    console.log(index);
    let copy = [...marks];

    which === '-'
      ? (copy[index] = copy[index] - 1)
      : (copy[index] = copy[index] + 1);

    // setMarks([...marks], (marks[index] = marks[index] + 1));
    setMarks(copy);
  };

  const handleResult = () => {
    let count = marks.filter((item) => item < 50).length;
    console.log('count', count);

    let resultcopy = { ...result };
    resultcopy.fail = count;
    resultcopy.pass = marks.length - count;
    setresult(resultcopy);
  };

  useEffect(() => {
    handleResult();
  }, [marks]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {marks.map((marks, index) => {
        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={() => handleClick(index, '+')}>+</button>
            <span>{marks}</span>
            <button onClick={() => handleClick(index, '-')}>-</button>
          </div>
        );
      })}
      <h1>pass:{result.pass}</h1>
      <h1> fail:{result.fail}</h1>{' '}
    </div>
  );
};

export default Practice;
