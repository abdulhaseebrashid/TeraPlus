import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubmitButton from './global_login_button';
import loginImage from '../../../../assets/img/Login/login.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/css/style.css';

const ForgotPassword = () => {
 
  return (
    <div className="container-fluid login-container">
      <div className="row rtl">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="login-form-height">
            <div className="login-form-header text-end d-flex flex-column gap-4">
              <div className="forgot-password-heading">
                <h4>שכחתם את הסיסמה שלכם?</h4>
                <p>הזינו את כתובת הדוא"ל ונשלח אליכם קישור לאיפוס שלה.</p>
              </div>
            </div>

            <div className="login-form-body rtl pt-2 pt-sm-2 pt-md-3 pt-lg-4">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">אימייל</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="johndoe@email.com"/>
                </div>

                <div className="button-container pt-4 pt-sm-2 pt-md-3 pt-lg-4 d-flex flex-column gap-2 align-items-center">
                  <SubmitButton>המשך</SubmitButton>
                </div>

                <div className="back-to-login pt-2 pt-sm-2 pt-md-3 pt-lg-4 text-center">
                  <Link to="/login" className="forgot-password-link form-text text-muted">
                       חזור להתחברות   
                  </Link>
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

export default ForgotPassword;
