import './ErrorInput.css';
import React from 'react';

const ErrorInput = ({className, error}) => {

  return (
    <span className={`error ${className}`.trim()}>{error}</span>
  )
}

export default ErrorInput;
