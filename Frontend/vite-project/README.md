# React + Vite

```js
// React.createElement() ==> Objects ==> HTML
const paragraphElement = React.createElement("p", null, "Hello World"); // <p>Hello World</p>
console.log(paragraphElement);

// Babel
// JSX [HTML LIKE SYNTAX] ==>  React.createElement() ==> Objects ==> HTML
const headingElement = (
  <h1 className="heading" style={{ color: "red" }}>
    Heading Element
  </h1>
);

// React Element
const headingNewElement = (
  <h2 className="text-green-500 bg-slate-400">Demo Text</h2>
);
```