import './SubmitAuth.css';
import React from 'react';
import { Link } from 'react-router-dom';

function SubmitAuth({ className, nameSubmit, question, link, linkText }) {
  return (
    <div className={`submit-auth ${className || ''}`.trim()}>
      <input className="button submit-auth__button" type="submit" value={nameSubmit} />
      <p className="submit-auth__question">
        {question}
        <Link className="link submit-auth__link" to={link}>{linkText}</Link>
      </p>
    </div>
  )
}

export default SubmitAuth;
