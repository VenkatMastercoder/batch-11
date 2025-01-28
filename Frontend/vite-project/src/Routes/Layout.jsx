import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserContext from "../context/userContext";
import CartProvider from "../context/CartContext";

const AppLayout = () => {
  return (
    <>
     <CartProvider>
        <UserContext.Provider value={{ name: "Sam" }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </CartProvider>
    </>
  );
};

export default AppLayout;
