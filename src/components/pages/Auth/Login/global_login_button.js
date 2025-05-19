// src/components/SubmitButton.js
import React from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/css/style.css';

const SubmitButton = ({ children = "התחברות", className = "", disabled, onClick }) => {
  return (
    <button
      type="submit"
      className={`login-form-button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SubmitButton;
