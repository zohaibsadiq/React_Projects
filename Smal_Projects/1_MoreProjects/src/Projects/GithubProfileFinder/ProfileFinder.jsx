import { useEffect, useState } from 'react';
import './Profile.css';
import Card from './Card';

const ProfileFinder = () => {
  const [userName, setUserName] = useState('zohaibsadiq');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleSubmit = () => {
    fetchGithubUserData();
  };

  const fetchGithubUserData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }
    console.log(data);
  };

  useEffect(() => {
    fetchGithubUserData();
  }, [userName]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className='github-profile-container'>
      <div className='input-wrapper'>
        <input
          type='text'
          name='search-by-username'
          placeholder='Search Github Profile'
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className='Profile-btn' onClick={handleSubmit}>
          Search
        </button>
      </div>
      {userData && <Card user={userData} />}
    </div>
  );
};

export default ProfileFinder;
