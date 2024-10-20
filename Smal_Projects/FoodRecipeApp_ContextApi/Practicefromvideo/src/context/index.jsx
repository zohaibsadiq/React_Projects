import { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const globalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipesList, setRecipesList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        console.log(data);
        setRecipesList(data.data.recipes);
        setLoading(false);
        setSearchParams('');
        navigate('/');
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  function handleAddToFavourite(getCurrentItem) {
    console.log(getCurrentItem);
    let copyFavouritesList = [...favouritesList];
    let index = copyFavouritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      copyFavouritesList.push(getCurrentItem);
    } else {
      copyFavouritesList.splice(index, 1);
    }
    setFavouritesList(copyFavouritesList);
  }
  console.log('favouritesList', favouritesList);
  return (
    <globalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleSubmit,
        loading,
        recipesList,
        recipeDetailsData,
        setRecipeDetailsData,
        favouritesList,
        handleAddToFavourite,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}
