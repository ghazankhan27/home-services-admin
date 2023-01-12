import React from "react";

export const LoginButton = () => {
  return (
    <button
      className={`
        outline-1 
        outline 
        hover:bg-slate-600 
        hover:text-white 
        transition 
        py-0.5
        rounded-full
        mt-4 
        `}
      type="submit"
    >
      Login
    </button>
  );
};
