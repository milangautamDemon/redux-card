import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const price = useSelector((state) => state.price.toFixed(2));

  return (
    <div className="w-[calc(100vw-1.1rem)] flex justify-between px-8 border-b-2 border-slate-50 py-4 shadow-md">
      <div className="flex gap-4">
        <Link to="/" className="navlink text-lg text-slate-800 font-semibold">
          Home
        </Link>
        <Link
          to="/card"
          className="navlink text-lg text-slate-800 font-semibold"
        >
          Card
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="text-lg text-slate-800 font-semibold">
          Items: <span className="text-blue-500">{items.length}</span>
        </div>
        <div className="text-lg text-slate-800 font-semibold">
          Rs: <span className="text-blue-500">{price}</span>
          {console.log(price)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
