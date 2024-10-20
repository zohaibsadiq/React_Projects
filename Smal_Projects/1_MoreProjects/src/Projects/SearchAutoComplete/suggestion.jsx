import React from 'react';

const Suggestion = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length ? (
        data.map((user, index) => {
          return (
            <li onClick={handleClick} key={index}>
              {user}
            </li>
          );
        })
      ) : (
        <li>No data found</li>
      )}
    </ul>
  );
};

export default Suggestion;
