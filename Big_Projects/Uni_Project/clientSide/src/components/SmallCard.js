import { Link } from "react-router-dom";


const SmallCard = (props) => {
  return (
    <div className="w-full max-w-[10rem]  border rounded-lg shadow-sm ">
      <Link to={`/${props.route}`}>
        <img
          className="h-24 p-4 mx-auto rounded-t-lg"
          src={props.image}
          alt="product image"
        />
      </Link>
      <div className="px-3 pb-4">
        <Link to={`${props.route}`}>    
          <h5 className="text-lg font-semibold tracking-tight text-center text-gray-900">
            {props.name}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default SmallCard;
