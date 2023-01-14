import { Loader } from "../../../Loader";

export const ApproveButton = ({ onClick, loading }) => {
  return (
    <button
      disabled={loading}
      style={{ width: 120, height: 30 }}
      onClick={onClick}
      className={`
        text-white 
        bg-green-600
        outline 
        outline-1 
        px-3 py-1 
        rounded-full 
        transition
        hover:opacity-70
        flex justify-center items-center
        `}
    >
      {loading ? <Loader /> : "Approve"}
    </button>
  );
};
