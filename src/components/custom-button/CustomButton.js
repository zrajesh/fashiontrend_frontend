import React from "react";

// Import scss
import "./CustomButton.scss";

const CustomButton = ({children, inverted, ...otherProps}) => (
    <button
     className={`custom-button ${inverted ? 'inverted' : ''}`}
     {...otherProps}
     >
        {children}
    </button>
)

export default CustomButton;
