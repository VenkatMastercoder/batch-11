import { createBrowserRouter } from "react-router-dom";
import ProductLayout from "../components/ProductLayout/ProductLayout";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Counter from "../components/Counter/Counter";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ImageComponent from "../components/ImageComponent/ImageComponent";
import AppLayout from "./Layout";
import { lazy } from "react";
import { Suspense } from "react";
import Home from "../pages/Home";
import AComponent from "../components/Demo/AComponent";
import Cart from "../components/Cart/Cart";

const Contact = lazy(() => import("../components/Contact/Contact"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductLayout />,
      },
      {
        path: "/products/:product_id",
        element: <ProductDetails />,
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/images",
        element: <ImageComponent />,
      },
      {
        path: "/props-drilling",
        element: <AComponent />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default Routes;