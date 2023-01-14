import { IoAddCircleSharp } from "react-icons/io5";

export const AddSubcategoryButton = ({ setListOfSubs }) => {
  return (
    <button
      type="button"
      onClick={() =>
        setListOfSubs((state) => (state.length < 6 ? [...state, 0] : state))
      }
    >
      <IoAddCircleSharp size={20} className="text-blue-600" />
    </button>
  );
};
