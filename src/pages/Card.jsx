import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { remove } from "../redux/CartSlice";
import { removePrice } from "../redux/PriceSlice";

const Card = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(remove(item.id));
    dispatch(removePrice(item.price));
  };

  return (
    <div className="grid grid-cols-3 gap-y-20 gap-x-12 justify-items-center my-12 mx-4">
      {items.map((item) => (
        <Product
          price={item.price}
          description={item.description}
          image={item.image}
          key={item.id}
          title={item.title}
          btnName="remove item"
          onClick={() => handleRemove(item)}
        />
      ))}
    </div>
  );
};

export default Card;
