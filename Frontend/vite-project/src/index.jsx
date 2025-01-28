/* eslint-disable react/prop-types */
import ReactDOM from "react-dom/client";
import "./style.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Routes} />);