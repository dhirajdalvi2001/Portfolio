import React, { useState } from "react";
import "./Contact.styles.css";
import InputField from "../InputField/InputField.component";
import Button from "../Button/Button.component";
import { onlyFirstCap, toTitleCase } from "../../util/helperFunctions";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="contact">
      <div className="header">
        <h2 className="">
          <span>Contact</span>
        </h2>
      </div>
      <div className="container">
        <div className="contact-headline-container">
          <p>
            <span className="label">To:</span>{" "}
            <span className="formdata">dhirajdalvi2001@gmail.com</span>
          </p>
          <p>
            <span className="label">From:</span>{" "}
            <span className="formdata">
              {formData?.email || "example@emailaddress.com"} (
              {toTitleCase(formData?.name) || "John Doe"})
            </span>
          </p>
          <p>
            <span className="label">Subject:</span>{" "}
            {formData?.subject && (
              <span className="formdata">
                {onlyFirstCap(formData?.subject)}
              </span>
            )}
          </p>
          <p>
            <span className="label body">Body:</span>{" "}
            {formData?.body && (
              <span className="formdata">{onlyFirstCap(formData?.body)}</span>
            )}
          </p>
        </div>
        <div className="contact-form">
          <form action="" className="form">
            <InputField
              label="Name"
              placeholder="Eg. John doe"
              value="name"
              formData={formData}
              setFormData={setFormData}
              changeOnBlur
            />
            <InputField
              label="Email"
              placeholder="Eg. example@emailaddress.com"
              value="email"
              formData={formData}
              setFormData={setFormData}
              changeOnBlur
            />
            <InputField
              label="Subject"
              placeholder="Enter the subject"
              value="subject"
              formData={formData}
              setFormData={setFormData}
              changeOnBlur
            />
            <InputField
              label="Body"
              placeholder="Enter the body"
              value="body"
              formData={formData}
              setFormData={setFormData}
              textarea
              changeOnBlur
            />
            <Button value="Send" onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
