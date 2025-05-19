import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../../assets/img/Login/login.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/css/style.css';
import SubmitButton from './global_login_button';
import googleIcon from '../../../../assets/img/Login/icon/googlebtn.svg';
import eyeOpen from '../../../../assets/img/Login/icon/eye-close.svg';   // your open eye SVG
import eyeClosed from '../../../../assets/img/Login/icon/eye-open.svg'; // your closed eye SVG

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [realPassword, setRealPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handlePasswordChange = (e) => {
    setRealPassword(e.target.value);
  };

  const getPasswordDisplayValue = () => {
    return showPassword ? realPassword : '*'.repeat(realPassword.length);
  };

  return (
    <div className="container-fluid login-container">
      <div className="row rtl">
        <div className="col-lg-6 col-md-12">
          <div className="login-form">
            <div className="login-form-header text-end d-flex flex-column gap-4">
              <div className="login-form-header-text">
                <h3>ברוכים השבים 👋</h3>
                <h3>המשיכו לחשבון שלכם</h3>
              </div>
              <div className="login-form-header-button d-flex justify-content-center">
                <button className="login-form-header-button-google d-flex align-items-center gap-2">
                  Sign up with Google
                  <img src={googleIcon} alt="Google icon" className="w-5 h-5 mr-2" />
                </button>
              </div>
            </div>

            <div className="login-form-body rtl pt-4">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">אימייל</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="form-group pt-2 pt-sm-2 pt-md-3 pt-lg-3">
                  <label htmlFor="password">סיסמה</label>
                  <div className="position-relative eye-icon-password">
                    {/* Eye Icon on the Left */}
                    <span
                      onClick={togglePasswordVisibility} className="eye-icon"
                    >
                      <img
                        src={showPassword ? eyeOpen : eyeClosed}
                        alt="Toggle password visibility"
                        width="20"
                      />
                    </span>

                    {/* Custom Password Display */}
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control text-end"
                      id="password"
                      value={realPassword}
                      onChange={handlePasswordChange}
                      style={{ paddingLeft: '35px' }}
                      autoComplete="off"
                    />

                  </div>
                  <Link to="/forgot-password" className="forgot-password form-text text-muted">
                    שכחתם סיסמה?
                  </Link>
                </div>

                <div className="button-container pt-4 pt-sm-2 pt-md-3 pt-lg-4 d-flex flex-column gap-2 align-items-center">
                  <SubmitButton>התחברות</SubmitButton>
                  <small className="privacy-policy-text form-text text-center w-75 px-4">
                    על ידי הרשמה, אתם מאשרים את{" "}
                    <Link to="/privacy-policy">Privacy Policy</Link> ול-
                    <Link to="/terms-of-service">Terms of Service</Link> שלנו.
                  </small>
                </div>

                <div className="register-container pt-3 pt-sm-2 pt-md-3 pt-lg-4 text-center">
                     עוד לא הצטרפתם?{'\u00A0'}
                  <Link to="/signup" className="register-text form-text text-muted">
                     הרשמו כאן 
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 login-image d-flex align-items-center justify-content-center">
          <img src={loginImage} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
