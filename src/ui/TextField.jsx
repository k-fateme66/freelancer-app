import React from "react";

function TextField({ name, value, onChange, lable }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {lable}
      </label>
      <input
        type="text"
        id={name}
        value={value}
        className="textField__input"
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
