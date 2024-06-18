import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Product from "../components/Product";
import { remove } from "../redux/CartSlice";
import { removePrice } from "../redux/PriceSlice";

const Card = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (index) => {
    const item = items[index];
    dispatch(remove(item.id));
    dispatch(removePrice(item.price));
  };

  return (
    <div className="grid grid-cols-3 gap-y-20 gap-x-12 justify-items-center my-12 mx-4">
      {items.map((item, index) => (
        <Product
          key={`${item.id}-${uuidv4()}`}
          price={item.price}
          description={item.description}
          image={item.image}
          title={item.title}
          btnName="remove item"
          onClick={() => handleRemove(index)}
        />
      ))}
    </div>
  );
};

export default Card;
