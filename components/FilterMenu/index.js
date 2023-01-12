import React from "react";
import { LogoutButton } from "./Components/LogoutButton";
import { MenuItem } from "./Components/MenuItem";

export const FilterMenu = ({ filters, selected, setFilter, setUser }) => {
  return (
    <div className="bg-slate-100 py-2">
      <p className="mb-4 text-center text-lg font-bold">Filter</p>
      <ul className="flex flex-col">
        {filters.map((item) => (
          <li key={item.id}>
            <MenuItem
              selected={selected === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.name}
            </MenuItem>
          </li>
        ))}
        <li>
          <LogoutButton setUser={setUser} />
        </li>
      </ul>
    </div>
  );
};
