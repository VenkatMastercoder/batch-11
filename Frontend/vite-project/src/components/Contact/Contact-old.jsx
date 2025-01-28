import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [data, setData] = useState([]);

  return (
    <>
      <p>Contact US</p>
      <form className="w-[40%] p-5">
        <div className="flex flex-col py-5 w-[50%]">
          <label htmlFor="name">Name</label>
          <input
            to="name"
            className="border border-green-500"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col py-5 w-[50%]">
          <label htmlFor="email">Email</label>
          <input
            to="email"
            className="border border-green-500"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col py-5 w-[50%]">
          <label htmlFor="message">Message</label>
          <textarea
            to="message"
            className="border border-green-500"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>

        <button
          className="bg-black text-white px-6 py-2"
          onClick={(e) => {
            e.preventDefault();
            setData((prev) => {
              return [...prev, { name, email, message }];
            });
          }}>
          Submit
        </button>
      </form>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Contact;
