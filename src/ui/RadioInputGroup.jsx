import React from "react";
import InputRadio from "./InputRadio";

function RadioInputGroup({ register, errors, watch, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <div className="flex items-center gap-x-5 justify-center">
        {options.map(({ label, value }) => (
          <InputRadio
            key={value}
            label={label}
            name={name}
            id={value}
            value={value}
            watch={watch}
            register={register}
            errors={errors}
            validationSchema={validationSchema}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm">
          {" "}
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
