import './SuccessMessage.css';
import React from 'react';

const SuccessMessage = ({className, message}) => {

  return (
    <span className={`message ${className}`.trim()}>{message}</span>
  )
}

export default SuccessMessage;
