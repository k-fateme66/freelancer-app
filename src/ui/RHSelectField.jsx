import React from "react";

function RHSelectField({
  label,
  name,
  options,
  requierd,
  validationSchema,
  errors,
  register,
}) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
        {requierd && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name, validationSchema)}
        name={name}
        id={name}
        className="textField__input"
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {" "}
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHSelectField;
