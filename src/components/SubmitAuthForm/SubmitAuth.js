import './SubmitAuth.css';
import React from 'react';
import { Link } from 'react-router-dom';

function SubmitAuth({ className, isValid, nameSubmit, question, link, linkText }) {
  return (
    <div className={`submit-auth ${className || ''}`.trim()}>
      <input
        className={`button submit-auth__button ${isValid ? '' : 'submit-auth__button_disable'}`.trim()}
        type="submit"
        value={nameSubmit}
        disabled={!isValid}
      />
      <p className="submit-auth__question">
        {question}
        <Link className="link submit-auth__link" to={link}>{linkText}</Link>
      </p>
    </div>
  )
}

export default SubmitAuth;
