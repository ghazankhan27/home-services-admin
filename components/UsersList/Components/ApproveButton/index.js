export const ApproveButton = ({ onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      style={{ width: 120 }}
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
        `}
    >
      Approve
    </button>
  );
};
