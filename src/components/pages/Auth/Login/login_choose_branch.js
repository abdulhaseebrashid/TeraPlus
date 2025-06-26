import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SubmitButton from './global_login_button';
import loginImage from '../../../../assets/img/Login/login.png';
import boxicon from '../../../../assets/img/Login/Rectangle_7336.png';

import './login_choose_branch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/css/style.css';

const LoginChooseBranch = () => {

  return (
    <div className="container-fluid login-container">
      <div className="row rtl">
        <div className="col-lg-6 login-form-right-side align-items-center justify-content-end">
          <div className="login-form-height">
            <div className="login-form-header text-end d-flex flex-column gap-4">
              <div className="forgot-password-heading">
                <h4>בחרו סניף</h4>
                <p>בחרו את הסניף שתרצו לנהל</p>
              </div>
            </div>

            <div className="login-form-body rtl pt-4 d-flex flex-column  gap-5">
              <div className='choose-branch-container d-flex flex-row gap-4 justify-content-start align-items-center'>
                <div className='choose-branch-logo'>
                    <img src={boxicon} alt="login" className='choose-branch-logo-img'/>
                </div>
                <div className='choose-branch-content d-flex justifiy-content-between flex-column'>
                    <h4>בחרו סניף</h4>
                    <p>בחרו את הסניף שתרצו לנהל</p>
                    <SubmitButton>המשך</SubmitButton>
                </div>
            </div>
            <div className='choose-branch-container d-flex flex-row gap-4 justify-content-start align-items-center'>
                <div className='choose-branch-logo'>
                    <img src={boxicon} alt="login" className='choose-branch-logo-img'/>
                </div>
                <div className='choose-branch-content d-flex justifiy-content-between flex-column'>
                    <div className='choose-branch-text'>
                        <h4>בחרו סניף</h4>
                        <p>בחרו את הסניף שתרצו לנהל</p>
                    </div>
                    <div className='choose-branch-button'>
                    <SubmitButton>המשך</SubmitButton>
                    </div>
                </div>
            </div>
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

export default LoginChooseBranch;
