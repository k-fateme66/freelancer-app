import React from "react";

function TextField({
  name,
  register,
  label,
  type = "text",
  requierd,
  validationSchema,
  errors,
}) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {requierd && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        className="textField__input"
        type={type}
        autoComplete="off"
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
