import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { useContext } from "react";
import UserContext from "../../context/userContext";

const Footer = () => {
  const value = useContext(UserContext);
  return (
    <footer className="p-4 bg-[#f9fafb] md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="flex flex-row justify-center items-center bg-">
          <img src={Logo} alt="" className="" />
        </div>

        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li id="home" className="mr-4 hover:underline md:mr-6">
            <Link to="/">
              {/* onClick - TO GET Auto Close Feature */}
              Home
            </Link>
          </li>
          <li id="products" className="mr-4 hover:underline md:mr-6">
            <Link to="/products">
              {/* onClick - TO GET Auto Close Feature */}
              Products
            </Link>
          </li>
          <li id="home" className="mr-4 hover:underline md:mr-6">
            <Link to="/counter">Counter</Link>
          </li>
          <li id="contact-us" className="mr-4 hover:underline md:mr-6">
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>

        <span className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
          © 2024-2025{" "}
          <a href="#" className="hover:underline">
            Online Shop
          </a>
          . All Rights Reserved - {value.name}.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
