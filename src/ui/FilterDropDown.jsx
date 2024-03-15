import React from "react";
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || "";
  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Select onChange={handleChange} options={options} value={filterValue} />
  );
}

export default FilterDropDown;
