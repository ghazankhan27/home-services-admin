export const MenuItem = ({ selected, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4
        text-left
        hover:bg-slate-300
        ${selected && "underline"}
        font-semibold
        w-full
        py-1
        `}
    >
      {children}
    </button>
  );
};
