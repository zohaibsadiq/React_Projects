import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import searchStyles from './searchStyles';
import { searchMovie } from '../../features/currentGenreOrCategory';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const classes = searchStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(query);
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== '/') return null;

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyUp={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant='standard'
        color={'primary'}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
            classes: { root: classes.searchInput }, // Custom styling for the input element
          },
        }}
      />
    </div>
  );
};

export default Search;
