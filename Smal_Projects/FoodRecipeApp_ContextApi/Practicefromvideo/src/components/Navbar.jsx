import { useContext } from 'react';
import { globalContext } from '../context/index';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(globalContext);
  console.log(searchParams);
  return (
    <>
      <nav className='flex items-center justify-between p-2 text-white bg-slate-700'>
        <h2 className='flex text-lg font-bold basis-1/4'>Food Recipe</h2>
        <ul className='flex justify-center gap-16'>
          <li>
            <Link to='/' className='hover:text-gray-300'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/favourites' className='hover:text-gray-300'>
              Favourites
            </Link>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            id='search'
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
            placeholder='Search for recipe'
            className='p-3 text-black bg-white rounded-full shadow-lg outline-none lg:w-96'
          />
        </form>
      </nav>
    </>
  );
}
