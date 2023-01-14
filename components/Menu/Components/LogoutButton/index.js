import React from "react";
import { BiLogOut } from "react-icons/bi";

export const LogoutButton = ({ setUser }) => {
  return (
    <button
      onClick={() => {
        localStorage.setItem("user", false);
        setUser(false);
      }}
      className="flex items-center gap-x-1 mt-8 px-4 font-bold text-red-700 w-full hover:bg-slate-300 py-1"
    >
      <BiLogOut size={22} />
      Logout
    </button>
  );
};
