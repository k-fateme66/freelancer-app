import React from "react";

function InputRadio({
  label,
  id,
  name,
  watch,
  value,
  register,
  validationSchema,
}) {
  return (
    <div className="flex items-center gap-x-2 ">
      <input
        {...register(name, validationSchema)}
        type="radio"
        name={name}
        className="w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
        id={id}
        value={value}
        checked={watch(name) === value}
      />
      <label className="text-secondary-600" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default InputRadio;
