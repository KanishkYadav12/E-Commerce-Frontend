import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

const Navbar = () => {
  // navList Data
  const navList = (
    <ul className="flex px-5 space-x-3 font-medium text-white text-md ">
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>

      <li>
        <Link to={"/signup"}>Signup</Link>
      </li>

      <li>
        <Link to={"/"}>Kamal</Link>
      </li>

      {/* Admin */}
      {/* <li>
                <Link to={'/'}>Admin</Link>
            </li> */}

      {/* logout */}
      {/* <li>
                logout
            </li> */}

      {/* Cart */}
      <li>
        <Link to={"/cart"}>Cart(0)</Link>
      </li>
    </ul>
  );
  return (
    <nav className="sticky top-0 bg-pink-600">
      <div className="items-center py-3 lg:flex lg:justify-between lg:px-3 ">
        <div className="py-3 left lg:py-0">
          <Link to={"/"}>
            <h2 className="text-2xl font-bold text-center text-white ">
              E-Bharat
            </h2>
          </Link>
        </div>

        <div className="flex justify-center mb-4 right lg:mb-0">{navList}</div>

        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
