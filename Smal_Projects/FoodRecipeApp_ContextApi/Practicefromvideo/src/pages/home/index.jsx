import React, { useContext } from 'react';
import { globalContext } from '../../context/index';
import RecipeList from '../../components/RecipeList';
export default function Home() {
  const { recipesList, loading } = useContext(globalContext);
  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-4xl'>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
        {recipesList && recipesList.length > 0 ? (
          recipesList.map((recipe) => (
            <RecipeList key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div>
            <h1 className='lg:text-4xl text-lg text-center text-black font-bold'>
              Please Search Something
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
