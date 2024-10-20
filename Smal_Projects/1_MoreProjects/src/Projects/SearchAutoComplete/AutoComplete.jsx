import { useEffect, useState } from 'react';
import Suggestion from './suggestion';
const AutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchDropdown, setSearchDropdown] = useState(false);

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    if (searchValue.length > 1) {
      const filteredUsers =
        users && users.length
          ? users.filter((user) => {
              return user.toLowerCase().includes(searchValue);
            })
          : [];
      setFilteredUsers(filteredUsers);
      setSearchDropdown(true);
    } else {
      setSearchDropdown(false);
    }
  };

  function handleClick(e) {
    console.log(e.target.innerText);
    setSearchTerm(e.target.innerText);
    setSearchDropdown(false);
    setFilteredUsers([]);
  }

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error Occured: {error.message}</h1>;
  }
  console.log(users, filteredUsers);
  return (
    <div className='search-container'>
      <input
        type='text'
        name='search-users'
        placeholder='Search Users here...'
        value={searchTerm}
        onChange={handleChange}
      />
      {searchDropdown && (
        <Suggestion data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
};

export default AutoComplete;
