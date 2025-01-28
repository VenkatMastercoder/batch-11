import React from "react";
import ReactDOM from 'react-dom/client';

const paraElement = document.getElementById("para");
const btnElement = document.getElementById("btn");
const rootElement = document.getElementById("root");

// <p>Hi</p>
const para = React.createElement("p", null, "Hi");   // <p>Hi</p>

const heading = React.createElement("h1", null, "Heading") // <h1>Heading</h1>

const root = ReactDOM.createRoot(rootElement);
root.render(heading)