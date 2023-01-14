import { MdDelete } from "react-icons/md";

export const DeleteSubcategoryButton = ({ index, setListOfSubs }) => {
  return (
    <button
      type="button"
      onClick={() =>
        setListOfSubs((state) => {
          const temp = [...state];
          if (temp.length > 0) temp.splice(index, 1);
          return temp;
        })
      }
    >
      <MdDelete size={20} className="relative top-2 text-red-600" />
    </button>
  );
};
