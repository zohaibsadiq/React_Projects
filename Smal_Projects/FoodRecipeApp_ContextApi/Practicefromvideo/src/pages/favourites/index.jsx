import React, { useContext } from 'react';
import { globalContext } from '../../context/index';
import RecipeList from '../../components/RecipeList';

export default function Favourites() {
  const { favouritesList, loading } = useContext(globalContext);
  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-4xl'>Loading...</h1>
      </div>
    );
  }

  console.log('favouritesListinFavourites', favouritesList);
  return (
    <>
      <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
        {favouritesList && favouritesList.length > 0 ? (
          favouritesList.map((recipe) => (
            <RecipeList key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div>
            <h1 className='lg:text-4xl text-lg text-center text-black font-bold'>
              No thing is added to favourites
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
