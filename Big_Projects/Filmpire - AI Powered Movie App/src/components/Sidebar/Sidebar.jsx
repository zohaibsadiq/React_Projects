import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetGenresQuery } from '../../services/TMDB';
import sideBarStyles from './sidebarstyle';
import { useEffect } from 'react';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png'; // Logo for dark mode
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png'; // Logo for light mode

// List of main categories (Popular, Top Rated, Upcoming)
const Categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

// Sidebar component
const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme(); // Accesses current theme (light or dark mode)
  const classes = sideBarStyles(); // Custom styles for Sidebar

  const { data, isFetching } = useGetGenresQuery(); // Fetches genre data from TMDB API
  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  // console.log(genreIdOrCategoryName);

  useEffect(() => {
    setMobileOpen(false);
  }, [data, genreIdOrCategoryName]);

  return (
    <>
      {/* Logo Link - switches logo based on theme */}
      <Link to={'/'} className={classes.imageLink}>
        <img src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt='Filmpire logo' className={classes.image} />
      </Link>
      <Divider /> {/* Divider line between logo and categories */}
      {/* Main Categories List */}
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to={'/'}>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              {/* Optional icon for category (commented out) */}
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLocaleLowerCase()]} // Get category icon based on category value
                  alt=''
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} /> {/* Display category label */}
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider /> {/* Divider line between categories and genres */}
      {/* Genre Categories List */}
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? ( // Display loading spinner while fetching data
          <Box display='flex' justifyContent='center'>
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={id} className={classes.links} to={'/'}>
              <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
                {/* Optional icon for genre (commented out) */}
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]} // Get genre icon based on genre name
                    alt=''
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} /> {/* Display genre label */}
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
