import { Loader } from "../../../Loader";

export const DisApproveButton = ({ onClick, loading }) => {
  return (
    <button
      disabled={loading}
      style={{ width: 120, height: 30 }}
      onClick={onClick}
      className={`
        text-white 
        bg-red-700 
        outline 
        outline-1 
        px-3 py-1 
        rounded-full 
        transition
        hover:opacity-70
        flex justify-center items-center
        `}
    >
      {loading ? <Loader /> : "Disapprove"}
    </button>
  );
};
