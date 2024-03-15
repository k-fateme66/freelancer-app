import React from "react";
import { useSearchParams } from "react-router-dom";

function FilterButton({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterCurrent = searchParams.get(filterField) || options.at(0).value;
  const handleChange = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex items-center gap-x-2 p-1 border border-secondary-100 bg-secondary-0 rounded-lg text-xs">
      {options.map(({ label, value }) => {
        const isActive = filterCurrent === value;
        return (
          <button
            onClick={() => handleChange(value)}
            key={value}
            className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300 
            ${
              isActive
                ? "!bg-primary-900 text-white"
                : "bg-secondary-0 text-secondary-800"
            } `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButton;
