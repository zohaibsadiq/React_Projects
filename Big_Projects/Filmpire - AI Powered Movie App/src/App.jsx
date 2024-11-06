import { CssBaseline } from '@mui/material'; // CssBaseline provides consistent styling resets across browsers
import { useStyles } from './styles'; // Importing custom styles for the App component
import { Route, Routes } from 'react-router-dom'; // React Router components for navigation
import { Actors, MovieInformation, Movies, Profile, Navbar } from './components/index'; // Importing main components used in different routes

function App() {
  const classes = useStyles(); // Applying custom styles from useStyles

  return (
    <div className={classes.root}>
      <CssBaseline /> {/* Adds consistent base styling across the app */}
      <Navbar /> {/* Navbar component always visible at the top */}
      <main className={classes.content}>
        {/* Spacer div for toolbar height adjustment */}
        <div className={classes.toolbar} />

        {/* Define routes for the application */}
        <Routes>
          {/* Movies list is the home page */}
          <Route path='/' element={<Movies />} />
          <Route path='/approved' element={<Movies />} />
          {/* Detailed information for a specific movie */}
          <Route path='/movie/:id' element={<MovieInformation />} />
          {/* Actor information page */}
          <Route path='/actors/:id' element={<Actors />} />
          {/* User profile page */}
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
