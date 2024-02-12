import React from "react";

function TextareaField({
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
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {requierd && <span className="text-error">*</span>}
      </label>
      <textarea
        className="textField__input"
        type={type}
        id={name}
        {...register(name, validationSchema)}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextareaField;
