import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubmitButton from './global_login_button';
import loginImage from '../../../../assets/img/Login/login.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/css/style.css';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('הסיסמאות אינן תואמות');
      return;
    }

    // Handle password update logic here
    console.log('New password set:', password);
  };

  return (
    <div className="container-fluid login-container">
      <div className="row rtl">
        <div className="col-lg-6 d-lg-flex align-items-center justify-content-center">
          <div className="login-form-height">
            <div className="login-form-header text-end d-flex flex-column gap-4">
              <div className="forgot-password-heading">
                <h4>סיסמה חדשה</h4>
                <p>אנא הקש סיסמה חדשה עבור כניסה למערכת</p>
              </div>
            </div>

            <div className="login-form-body rtl pt-2 pt-sm-2 pt-md-3 pt-lg-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="newPassword">סיסמה חדשה</label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mt-2 mt-sm-2 mt-md-3 mt-lg-3">
                  <label htmlFor="confirmPassword">אישור סיסמה</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="button-container pt-3 pt-sm-2 pt-md-3 pt-lg-5 d-flex flex-column gap-2 align-items-center">
                    <SubmitButton>אפס סיסמה</SubmitButton>
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

export default NewPassword;
