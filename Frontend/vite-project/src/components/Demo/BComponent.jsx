/* eslint-disable react/prop-types */
const BComponent = ({ name, data }) => {
  return (
    <>
      <div>Component B - {name}</div>

      <button
        onClick={() => {
          data("Hello From Component B");
        }}
        className="bg-black text-white p-5 m-5 rounded-lg">
        Change Data
      </button>
    </>
  );
};

export default BComponent;
