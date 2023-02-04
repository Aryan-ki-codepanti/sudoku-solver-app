import React from "react";
import ErrorImage from "../../assets/error.svg";

import "./errorMessage.css";

const ErrorMessage = ({ message }) => {
    return (
        <div className="error-message-wrapper">
            <img src={ErrorImage} alt="Error-404" />
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
