import { CssBaseline } from '@mui/material';
import { useStyles } from './styles';
import { Route, Routes } from 'react-router-dom';
import {
  Actors,
  MovieInformation,
  Movies,
  Profile,
  Navbar,
} from './components/index';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie/:id' element={<MovieInformation />} />
          <Route path='/actors/:id' element={<Actors />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
