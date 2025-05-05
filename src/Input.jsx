import { useState } from "react";

export const Input = ({ onkeydown }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      onkeydown(value);
      setValue("");
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
