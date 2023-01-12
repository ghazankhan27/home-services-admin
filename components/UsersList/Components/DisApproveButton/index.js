export const DisApproveButton = ({ onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      style={{ width: 120 }}
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
        `}
    >
      Dissapprove
    </button>
  );
};
