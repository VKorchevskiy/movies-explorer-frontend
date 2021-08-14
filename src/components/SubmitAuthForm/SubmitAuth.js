import ErrorInput from '../ErrorInput/ErrorInput';
import './SubmitAuth.css';
import React, { useContext } from 'react';
import { Link, } from 'react-router-dom';
import { IsButtonDisabledContext } from '../../contexts/IsButtonDisabledContext';

function SubmitAuth({ className, isValid, nameSubmit, question, link, linkText, error }) {
  const isButtonDisabled = useContext(IsButtonDisabledContext);

  return (
    <div className={`submit-auth ${className || ''}`.trim()}>
      <ErrorInput className={`submit-auth__error ${error ? '' : 'submit-auth__error_disable'}`} error={error} />
      <input
        className={`button submit-auth__button `}
        type="submit"
        value={nameSubmit}
        disabled={!isValid || isButtonDisabled}
      />
      <p className="submit-auth__question">
        {question}
        <Link className="link submit-auth__link" to={link}>{linkText}</Link>
      </p>
    </div>
  )
}

export default SubmitAuth;
