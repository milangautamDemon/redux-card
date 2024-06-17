import { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/CartSlice";
import { fetchProducts } from "../redux/ProductSlice";
import { STATUS } from "../redux/ProductSlice";
import { addPrice } from "../redux/PriceSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    dispatch(addPrice(product.price));
  };

  if (status === STATUS.LOADING) {
    return (
      <h2 className="text-orange-500 text-lg font-semibold">
        {STATUS.LOADING}...
      </h2>
    );
  }

  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-y-20 gap-x-12 justify-items-center my-12 mx-4">
      {data.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          price={product.price}
          description={product.description}
          category={product.category}
          title={product.title}
          btnName="add item"
          onClick={() => handleAdd(product)}
        />
      ))}
    </div>
  );
};

export default Home;
