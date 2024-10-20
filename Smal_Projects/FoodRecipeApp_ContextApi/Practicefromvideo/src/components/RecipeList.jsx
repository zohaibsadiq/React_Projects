import { Link } from 'react-router-dom';

export default function RecipeList({ recipe }) {
    console.log(recipe)
  return (
    <div className='flex flex-col overflow-hidden p-5 shadow-xl gap-5 border-2 border-white w-80 '>
      <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
        <img
          src={recipe?.image_url}
          alt={recipe.title}
          className='w-full h-full object-cover'
        />
      </div>
      <div>
        <span className='text-sm text-cyan-700 font-medium'>
          {recipe?.publisher}
        </span>
        <h3 className='font-bold text-2xl text-black truncate'>
          {recipe?.title}
        </h3>
        <Link
          to={`/details/${recipe?.id}`}
          className='text-sm p-3 px-8 uppercase font-medium inline-block bg-black rounded-lg text-white hover:bg-gray-700 mt-5'
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
