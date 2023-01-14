import { Loader } from "../../../../../Loader";

export const SubmitButton = ({ loading }) => {
  return (
    <button
      type="submit"
      style={{ width: 110, height: 30 }}
      className="bg-blue-600 text-white w-fit rounded-full hover:bg-blue-800 transition flex justify-center items-center"
    >
      {loading ? <Loader /> : "Add"}
    </button>
  );
};
