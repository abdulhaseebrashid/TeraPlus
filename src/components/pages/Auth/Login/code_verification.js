import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SubmitButton from './global_login_button';
import loginImage from '../../../../assets/img/Login/login.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/css/style.css';

const CodeVerification = () => {
  const inputs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  return (
    <div className="container-fluid login-container">
      <div className="row rtl">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="login-form-height">
            <div className="login-form-header text-end d-flex flex-column gap-4">
              <div className="forgot-password-heading">
                <h4>הקש קוד סודי</h4>
                <p>שלחנו לך הודעה לנייד שלך עם קוד סודי</p>
              </div>
            </div>

            <div className="login-form-body rtl pt-4">
              <form>

                <div className="form-group">
                <label htmlFor="exampleInputEmail1">קוד סודי</label>
                  <div className="verification-container d-flex justify-content-start gap-2 my-1">
                      {inputs.map((ref, index) => (
                        <input
                          key={index}
                          ref={ref}
                          type="text"
                          maxLength="1"
                          className="form-control verification-input text-center"
                          onChange={(e) => handleChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      ))}
                  </div>
                </div>

                <div className="button-container pt-2 pt-sm-2 pt-md-3 pt-lg-4 d-flex flex-column gap-2 align-items-center">
                  <SubmitButton>המשך</SubmitButton>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6 login-image-height d-flex align-items-center justify-content-center">
          <img src={loginImage} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default CodeVerification;
