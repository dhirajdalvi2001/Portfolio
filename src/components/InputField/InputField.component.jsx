import React from "react";
import "./InputField.styles.css";

const InputField = ({
  label,
  placeholder,
  value,
  rows = 4,
  formData,
  setFormData,
  textarea,
}) => {
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
            setFormData &&
              setFormData((prev) => ({
                ...prev,
                [value]: e.target.value,
              }));
          }}
        />
      ) : (
        <input
          type="text"
          name={value}
          className="input-field"
          value={formData[value]}
          placeholder={placeholder}
          onChange={(e) => {
            setFormData &&
              setFormData((prev) => ({
                ...prev,
                [value]: e.target.value,
              }));
          }}
        />
      )}
    </div>
  );
};

export default InputField;
