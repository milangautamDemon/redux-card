import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useDispatch } from "react-redux";
import { add } from "../redux/CartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    async function fetchProduct() {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const data = await fetchData.json();
      console.log(data);
      setProducts(data);
    }
    fetchProduct();
  }, []);

  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-y-20 gap-x-12 justify-items-center my-12 mx-4">
      {products.map((product) => (
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
