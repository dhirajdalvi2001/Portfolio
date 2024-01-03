import React, { useState } from "react";
import "./Contact.styles.css";
import InputField from "../InputField/InputField.component";
import Button from "../Button/Button.component";
import { onlyFirstCap, toTitleCase } from "../../util/helperFunctions";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  let SERVICE_ID = "service_vllrebo";
  let TEMPLATE_ID = "template_a4hh13t";
  let USER_ID = "aX89XkO0G84FfOyvP";
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [clearInputVal, setClearInputVal] = useState(false);

  const validate = () => {
    const error = "This field is required";
    if (
      !formData?.name ||
      !formData?.email ||
      !formData?.subject ||
      !formData?.body
    ) {
      ["name", "email", "subject", "body"].forEach((key) => {
        if (!formData[key]) {
          setErrors((prev) => ({
            ...prev,
            [key]: error,
          }));
        }
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = SERVICE_ID;
    const templateId = TEMPLATE_ID;
    const userId = USER_ID;
    const form = e.target.closest("form");

    if (!validate()) return;

    emailjs
      .sendForm(serviceId, templateId, form, userId)
      .then((result) => {
        setClearInputVal((prev) => !prev);
        toast.success("Your request has been sent!");
        setFormData({});
      })
      .catch((error) => {
        console.error("Email Error:", error);
      });
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
            <span className="formdata">
              {onlyFirstCap(formData?.subject) ||
                "To ask if you can build a website for us"}
            </span>
          </p>
          <p>
            <span className="label body">Body:</span>{" "}
            <span className="formdata">
              {onlyFirstCap(formData?.body) ||
                "This will be the body of the email"}
            </span>
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
              errors={errors}
              setErrors={setErrors}
              clearInputVal={clearInputVal}
              changeOnBlur
            />
            <InputField
              label="Email"
              placeholder="Eg. example@emailaddress.com"
              value="email"
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              clearInputVal={clearInputVal}
              changeOnBlur
            />
            <InputField
              label="Subject"
              placeholder="Eg. To ask if you can build a website for us"
              value="subject"
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              clearInputVal={clearInputVal}
              changeOnBlur
            />
            <InputField
              label="Body"
              placeholder="Enter the body"
              value="body"
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              clearInputVal={clearInputVal}
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
