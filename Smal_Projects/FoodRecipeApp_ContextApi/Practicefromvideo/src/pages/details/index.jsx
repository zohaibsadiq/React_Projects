import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { globalContext } from '../../context/index';

export default function Details() {
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavourite,
    favouritesList,
  } = useContext(globalContext);
  const params = useParams();
  console.log(params);

  async function getRecipeDetails() {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
      );
      const data = await response.json();
      if (data?.data?.recipe) {
        console.log(data);
        setRecipeDetailsData(data.data.recipe);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getRecipeDetails();
  }, [params.id]);
  // console.log(recipeDetailsData);

  return (
    <>
      <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 '>
        <div className='row-start-2 lg:row-start-auto '>
          <div className='h-96 overflow-hidden rounded-xl group'>
            <img
              src={recipeDetailsData?.image_url}
              alt='image of item'
              className='w-full  h-full object-cover block group-hover:scale-105 duration-300'
            />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='text-sm text-cyan-700 font-medium'>
            {recipeDetailsData?.publisher}
          </span>
          <h3 className='font-bold text-2xl text-black truncate'>
            {recipeDetailsData?.title}
          </h3>
          <div>
            <button
              onClick={() => handleAddToFavourite(recipeDetailsData)}
              className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider shadow-md inline-block text-white bg-black '
            >
              {
                (favouritesList.findIndex(
                  (item) => item.id === recipeDetailsData?.id
                ) === -1 && 'Add to Favourites') ||
                'Remove from Favourites'
              }
            </button>
          </div>
          <div>
            <span className='text-2xl font-semibold text-black'>
              Ingredients:
            </span>
            <ul className='flex flex-col gap-3'>
              {recipeDetailsData?.ingredients?.map((ingredient, index) => (
                <li key={index} className='text-lg text-gray-700'>
                  <span className='text-2xl font-semibold text-black'>
                    {' '}
                    {ingredient.quantity} {ingredient.unit}{' '}
                  </span>
                  <span className='text-2xl font-semibold text-black'>
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        d
      </div>
    </>
  );
}
