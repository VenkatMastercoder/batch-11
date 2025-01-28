import { useEffect, useState } from "react";

const Counter = () => {
  let [val, setVal] = useState(0);
  let [name, setName] = useState("Ram");
  let [bool, setBool] = useState(true);
  const [dummy, setDummy] = useState(0);

  useEffect(() => {
    console.log("UseEffect called");
    setDummy(dummy + 1);
    console.log("useEffect:", dummy);
  }, []);

  return (
    <>
      <div className="2xl:container mx-auto h-screen">
        <div className="w-[90%] mx-auto grid grid-cols-1 gap-4">
          <div className="border border-red-500 p-5 ">
            <p>Counter</p>
            <p>{val}</p>
            <button
              className="bg-blue-500 px-6 py-2 rounded-lg"
              onClick={() => {
                console.log("button clicked : - Btn");
                setVal(val - 1); // Argument
                console.log("val:", val);
              }}>
              -
            </button>

            <button
              className="bg-blue-500 px-6 py-2 rounded-lg"
              onClick={() => {
                console.log("button clicked : + Btn");
                setVal(val + 1);
                console.log("val:", val);
              }}>
              +
            </button>
          </div>

          <div className="border border-red-500 p-5">
            <p>{name}</p>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
              onClick={() => {
                setName("Sam");
              }}>
              Update - Dir Value String
            </button>
          </div>

          <div className="border border-red-500 p-5">
            <p>{bool ? "🚀" : "❌"}</p>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
              onClick={() => {
                setBool(false);
              }}>
              Update - Dir Value Bool
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
