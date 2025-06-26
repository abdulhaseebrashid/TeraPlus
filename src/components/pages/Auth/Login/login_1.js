import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../../assets/img/Login/login.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/css/style.css';
import SubmitButton from './global_login_button';
import googleIcon from '../../../../assets/img/Login/icon/googlebtn.svg';
import appleIcon from '../../../../assets/img/Login/icon/applebtn.svg';

const Login = () => {
  return (
    <div className="container-fluid login-container">
      <div className="row rtl">
        <div className="col-lg-6 col-md-12 login-form-right-side">
          <div className="login-form">
            <div className="login-form-header text-end d-flex flex-column">
              <div className="login-form-header-text mb-4">
                <h3>הצטרפו אלינו</h3>
                <h3>ותתחילו לנהל את</h3>
                <h3>העסק שלכם בקלות</h3>
              </div>
              <div className="login-form-header-button d-flex justify-content-center mb-2">
                <button className="login-form-header-button-google d-flex align-items-center gap-2">
                  login with Google
                  <img src={googleIcon} alt="Google icon" className="w-5 h-5 mr-2" />
                </button>
              </div>
              <div className="login-form-header-button d-flex justify-content-center">
                <button className="login-form-header-button-apple d-flex align-items-center gap-2">
                log In with Apple
                  <img src={appleIcon} alt="Apple icon" className="w-5 h-5 mr-2" />
                </button>
              </div>
              <div className="login-form-header-button d-flex justify-content-center mt-4">
                  <h6 className='login-form-OR'>או על ידי</h6> 
              </div>
            </div>

            <div className="login-form-body rtl pt-4">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1 mb-2">מספר פלאפון</label>
                  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='0546679785' />
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
