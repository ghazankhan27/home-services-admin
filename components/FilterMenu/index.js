import { FilterItem } from "./Components/FilterItem";

export const FilterMenu = ({ selected, setFilter, filters }) => {
  return (
    <div className="border border-black">
      <ul className="grid grid-cols-3 place-items-stretch">
        {filters.map((item) => (
          <li key={item.id}>
            <FilterItem
              selected={selected === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.name}
            </FilterItem>
          </li>
        ))}
      </ul>
    </div>
  );
};
