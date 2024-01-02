import React, { useEffect, useState } from "react";
import "./InputField.styles.css";

const InputField = ({
  label,
  placeholder,
  value,
  rows = 4,
  formData,
  setFormData,
  textarea,
  changeOnBlur = false,
}) => {
  const [inputVal, setInputVal] = useState("");
  const handleChangeOnBlur = () => {
    setFormData &&
      setFormData((prev) => ({
        ...prev,
        [value]: inputVal,
      }));
  };

  return (
    <div id="input-field">
      {label && (
        <label htmlFor="name" className="label">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          type="text"
          rows={rows}
          name={value}
          className="textarea-field"
          value={formData[value]}
          placeholder={placeholder}
          onChange={(e) => {
            setInputVal(e.target.value);
            !changeOnBlur &&
              setFormData &&
              setFormData((prev) => ({
                ...prev,
                [value]: e.target.value,
              }));
          }}
          onBlur={handleChangeOnBlur}
        />
      ) : (
        <input
          type="text"
          name={value}
          className="input-field"
          value={formData[value]}
          placeholder={placeholder}
          onChange={(e) => {
            setInputVal(e.target.value);
            !changeOnBlur && setFormData &&
              setFormData((prev) => ({
                ...prev,
                [value]: e.target.value,
              }));
          }}
          onBlur={handleChangeOnBlur}
        />
      )}
    </div>
  );
};

export default InputField;
