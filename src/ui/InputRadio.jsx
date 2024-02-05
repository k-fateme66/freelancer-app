import React from "react";

function InputRadio({ label, id, name, onChange, checked, value }) {
  return (
    <div className="flex items-center gap-x-2 ">
      <input
        type="radio"
        name={name}
        className="w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className="text-secondary-600" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default InputRadio;
