import React, { useEffect, useState } from "react";
import "./InputField.styles.css";
import ErrorText from "../Texts/ErrorText.component";

const InputField = ({
  label,
  placeholder,
  value,
  rows = 4,
  formData,
  setFormData,
  textarea,
  changeOnBlur = false,
  errors,
  setErrors,
  clearInputVal,
  bg = "secondary",
}) => {
  const [inputVal, setInputVal] = useState("");

  const handleChangeOnBlur = () => {
    setFormData &&
      setFormData((prev) => ({
        ...prev,
        [value]: inputVal,
      }));
  };

  const handleChange = (e) => {
    setErrors((prev) => ({ ...prev, [value]: "" }));
    setInputVal(e.target.value);
    !changeOnBlur &&
      setFormData &&
      setFormData((prev) => ({
        ...prev,
        [value]: e.target.value,
      }));
  };

  useEffect(() => {
    clearInputVal && setInputVal("");
  }, [clearInputVal]);

  return (
    <div id="input-field">
      {label && (
        <label htmlFor="name" className={`label ${bg}`}>
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          type="text"
          rows={rows}
          name={value}
          className="textarea-field"
          value={inputVal}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          onBlur={handleChangeOnBlur}
          autoComplete="off"
        />
      ) : (
        <input
          type="text"
          name={value}
          className="input-field"
          value={inputVal}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          onBlur={handleChangeOnBlur}
          autoComplete="off"
        />
      )}
      <ErrorText>{errors && errors[value]}</ErrorText>
    </div>
  );
};

export default InputField;
