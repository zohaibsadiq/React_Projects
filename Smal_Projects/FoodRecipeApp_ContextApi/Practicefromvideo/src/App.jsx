import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Favourites from './pages/favourites';
import Details from './pages/details';

function App() {
  return (
    <>
      <div className='min-h-screen  text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='favourites' element={<Favourites />} />
          <Route path='details/:id' element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
