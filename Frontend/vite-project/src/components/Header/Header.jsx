import { useContext, useState } from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import UserContext from "../../context/userContext";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const data = useOnlineStatus();

  const value = useContext(UserContext);

  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* logo */}
        <div className="flex justify-between">
          <Link to="/">
            <img src={Logo} alt="" className="h-20" />
          </Link>

          <div>
            {/* Menu Toggle Icon */}
            {show ? (
              <svg
                onClick={toggle}
                className="block md:hidden"
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1em"
                width="1em"
                aria-label="Close menu">
                <g fill="none" fillRule="evenodd" stroke="currentColor">
                  <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                </g>
              </svg>
            ) : (
              <svg
                onClick={toggle}
                className="block md:hidden"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                aria-label="Open menu">
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
              </svg>
            )}
          </div>
        </div>
        {/* content */}
        <div className={show ? "block" : "hidden md:block"}>
          <ul className="flex flex-col justify-center items-center md:flex-row md:justify-end gap-4 h-20">
            <li id="home">
              <Link to="/" onClick={toggle}>
                {/* onClick - TO GET Auto Close Feature */}
                Home
              </Link>
            </li>
            <li id="products">
              <Link to="/products" onClick={toggle}>
                {/* onClick - TO GET Auto Close Feature */}
                Products
              </Link>
            </li>
            <li id="cart">
              <Link to="/cart" onClick={toggle}>
                {/* onClick - TO GET Auto Close Feature */}
                Cart
              </Link>
            </li>
            <li id="home">
              <Link to="/counter" onClick={toggle}>
                Counter
              </Link>
            </li>
            <li id="contact-us">
              <Link to="/contact-us" onClick={toggle}>
                Contact us
              </Link>
            </li>
            <li id="status">{data ? "✅" : "❌"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
