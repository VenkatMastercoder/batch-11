import { useState } from "react";

const Comment = () => {
  const [name, setName] = useState(null);
  const [message, setMessage] = useState(null);

  const [data, setData] = useState({ name: "", message: "" });

  const [formData, setFormData] = useState([]);

  return (
    <>
      <div className="flex flex-col justify-start w-[30%] gap-4 p-5">
        <p>Comment on Post</p>

        <label>Name</label>
        <input
          className="border border-red-400"
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
            // setData({ name: e.target.value });

            setData((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />

        <label>Message</label>
        <textarea
          name=""
          id=""
          className="border border-red-400"
          onChange={(e) => {
            console.log(e.target.value);
            setMessage(e.target.value);
            // setData({ message: e.target.value });

            setData((prev) => {
              return { ...prev, message: e.target.value };
            });
          }}></textarea>

        <button
          className="bg-black text-white rounded-sm"
          onClick={() => {
            // return setformData([data])

            return setFormData((prev) => {
              return [...prev, data];
            });
          }}>
          Submit
        </button>
      </div>

      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {formData.map((items) => {
            return (
              <>
                <div className="bg-white shadow-md p-5 rounded-lg">
                  <p>Name: {items.name}</p>
                  <p>Message: {items.message}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Comment;
