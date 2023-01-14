export const FilterItem = ({ selected, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-2
        ${!selected && "hover:bg-slate-600 hover:text-white"}
        ${selected ? "bg-slate-800 text-white" : "bg-slate-100"}
        font-semibold
        w-full
        py-1
        `}
    >
      {children}
    </button>
  );
};
