import React, { useState } from 'react';

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className='Search-engine'>
      <input
        type='text'
        placeholder='Enter city Name'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search Weather</button>
    </div>
  );
}
