import React from "react";
import Select from "react-select";

export const SelectField = ({ label, input, options }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <Select
        {...input}
        onChange={value => input.onChange(value)}
        onBlur={() => input.onBlur(input.value)}
        options={options}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
