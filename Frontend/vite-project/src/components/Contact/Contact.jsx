import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log(watch("name"));

  return (
    <>
      <div className="2xl:container mx-auto h-screen">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <p>Contact US</p>
          <form className="w-[40%] p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col py-5 w-[50%]">
              <label htmlFor="name">Name</label>
              <input
                to="name"
                className="border border-green-500"
                {...register("name")}
              />
            </div>

            <div className="flex flex-col py-5 w-[50%]">
              <label htmlFor="email">Email</label>
              <input
                to="email"
                className="border border-green-500"
                {...register("email")}
              />
            </div>

            <div className="flex flex-col py-5 w-[50%]">
              <label htmlFor="message">Message</label>
              <textarea
                to="message"
                className="border border-green-500"
                {...register("message")}
              />
            </div>

            <button className="bg-black text-white px-6 py-2">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
