const Product = ({ image, price, description, title, btnName, ...handle }) => {
  return (
    <div className="w-60 flex flex-col gap-6 py-6 px-4 border-2 border-slate-100 shadow-lg">
      <img src={image} alt={title} className="h-[14rem] w-full" />
      <div className="flex flex-col gap-4">
        <p className="text-slate-500 truncate ...">{description}</p>
        <h5 className="font-semibold text-slate-800 text-lg text-center">
          Rs: {price}
        </h5>
        <button
          {...handle}
          className="px-6 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-500 capitalize w-fit flex self-center"
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Product;
