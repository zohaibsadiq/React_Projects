const Card = (props) => {
  return (
    <div className="w-full max-w-[12rem] sx:max-w-[14rem] bg-[#FF6B35] border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          className="flex justify-center object-fill h-48 p-2 mx-auto rounded-lg xs:p-3"
          src={props.image}
          alt="product image"
        />
      </a>
      <div className="px-3 pb-3">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-[#f2f5f2]">
            {props.name}
          </h5>
          <div className="flex items-center mt-2 mb-3">
            <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
            <span className="bg-[#f2f5f2] text-[#FF6B35] text-sm font-semibold px-2 py-0.5 rounded  flex gap-1 items-center">
              <svg
                className="w-4 h-4 text-[#FF6B35]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              {props.rate}
            </span>
          </div>
          <h1 className="text-xl font-bold text-[#f2f5f2]">RS:{props.price}</h1>
        </a>
      </div>
    </div>
  );
};

export default Card;
