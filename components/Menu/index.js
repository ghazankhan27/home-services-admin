import React from "react";
import { LogoutButton } from "../FilterMenu/Components/LogoutButton";
import { MenuItem } from "./Components/MenuItem";

export const Menu = ({ items, selected, setSelected, setUser }) => {
  return (
    <div className="bg-slate-100 py-2">
      <p className="mb-4 text-center text-lg font-bold">Menu</p>
      <ul className="flex flex-col">
        {items.map((item) => (
          <MenuItem
            onClick={() => setSelected(item.id)}
            selected={selected === item.id}
          >
            {item.name}
          </MenuItem>
        ))}
        <LogoutButton setUser={setUser} />
      </ul>
    </div>
  );
};
