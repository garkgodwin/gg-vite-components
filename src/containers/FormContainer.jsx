import React from "react";
import "../assets/styles/containers/form-container.css";

const FormContainer = ({ handleSubmit, children }) => {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default FormContainer;
