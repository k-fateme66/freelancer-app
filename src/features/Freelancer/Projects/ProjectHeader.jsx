import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import FilterButton from "../../../ui/FilterButton";

function ProjectHeader() {
  const { transformedCategories } = useCategories();
  const statusOptions = [
    {
      value: "All",
      label: "همه",
    },
    {
      value: "OPEN",
      label: "باز",
    },
    {
      value: "CLOSED",
      label: "بسته",
    },
  ];
  const sortOptions = [
    {
      value: "latest",
      label: "قدیمی‌ترین",
    },
    {
      value: "earliest",
      label: "جدیدترین",
    },
  ];
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="font-bold text-xl text-secondary-600"> لیست پروژه‌ها</h1>
      <div className="flex gap-x-8 items-center">
        <p>فیلترها:</p>
        <FilterButton options={sortOptions} filterField="sort" />
        <FilterDropDown options={statusOptions} filterField="status" />
        <FilterDropDown
          options={[
            {
              value: "All",
              label: "(همه) دسته‌بندی",
            },
            ...transformedCategories,
          ]}
          filterField="category"
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
